import logo from "./logo.svg";
import "./App.css";
import LoginContainer from "./containers/LoginContainer";
import AppRoute from "./routes/Route";
function App() {
  return (
    <div className="App">
      <AppRoute />
      {/* <LoginContainer /> */}
    </div>
  );
}

export default App;
