import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/layouts/FooterComponent";
import HeaderComponent from "./components/layouts/HeaderComopnent";

import AppRoute from "./routes/Route";
function App() {
  return (
    <>
      <BrowserRouter>{/* <HeaderComponent /> */}</BrowserRouter>

      <AppRoute />
      <BrowserRouter>{/* <FooterComponent /> */}</BrowserRouter>
    </>
  );
}

export default App;
