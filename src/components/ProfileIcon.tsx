import { AccountCircle } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import md5 from "blueimp-md5";
import React from "react";

type User = { email: string };
type Props = {
  user: User | null;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const gravatar = (email: string): string =>
  `//www.gravatar.com/avatar/${md5(email)}?d=identicon`;

const ProfileButton = React.forwardRef(
  ({ user, ...props }: Props, ref: React.ForwardedRef<HTMLButtonElement>) => {
    return (
      <IconButton ref={ref} {...props}>
        {user ? (
          <Avatar alt="profile" src={gravatar(user?.email)} />
        ) : (
          <AccountCircle sx={{ color: "primary.contrastText" }} />
        )}
      </IconButton>
    );
  }
);

export default ProfileButton;
