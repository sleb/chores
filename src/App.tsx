import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import HomePage from "./components/home/HomePage";
import Layout from "./components/Layout";
import NewCleanPage from "./components/new-clean/NewCleanPage";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/new-clean" element={<NewCleanPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
