import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductComponent from "../components/ProductComponent";
import ProductDetail from "../components/ProductDetailComponent";
import DashboardContainer from "../containers/DashboardContainer";
import LoginContainer from "../containers/LoginContainer";
import PrivateRoute from "./PrivateRoute";
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginContainer />}></Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardContainer />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/products" element={<ProductComponent />}></Route>
        <Route path="/products/:productID" element={<ProductDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoute;
