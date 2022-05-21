import Avatar from "@mui/material/Avatar";
import md5 from "blueimp-md5";
import React from "react";

type Props = {
  user: { email: string };
};

export const gravatar = (email: string): string =>
  `//www.gravatar.com/avatar/${md5(email)}?d=identicon`;

const Gravatar = ({ user }: Props) => {
  return <Avatar alt="profile" src={gravatar(user.email)} />;
};

export default Gravatar;
