import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContainer from "../containers/DashboardContainer";
import LoginContainer from "../containers/LoginContainer";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginContainer />}></Route>
        <Route path="/dashboard" element={<DashboardContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
