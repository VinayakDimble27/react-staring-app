import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.loginReducer.userInfo);
  console.log(isAuthenticated);
  return isAuthenticated.token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
