import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Endpoint from "./components/Endpoint";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="min-h-screen ">
          {/* <Navbar /> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/endpoint">
              <Endpoint />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
