import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/layouts/FooterComponent";
import HeaderComponent from "../components/layouts/HeaderComopnent";
import ProductComponent from "../components/ProductComponent";
import ProductDetail from "../components/ProductDetailComponent";
import AddUserContainer from "../containers/AddUserContainer";
import DashboardContainer from "../containers/DashboardContainer";
import EditUserContainer from "../containers/EditUserContainer";
import LoginContainer from "../containers/LoginContainer";
import PrivateRoute from "./PrivateRoute";
const AppRoute = () => {
  return (
    <>
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
          <Route path="create-user" element={<AddUserContainer />}></Route>
          <Route
            path="/edit-user/:userID"
            element={<EditUserContainer />}
          ></Route>
          <Route path="/products" element={<ProductComponent />}></Route>
          <Route
            path="/products/:productID"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRoute;
