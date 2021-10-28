import React from "react";
import { BrowserRouter as Rauter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Rauter>
        <Switch>
          <Route path="/" component={Signup} exact></Route>
          <Route path="/Login" component={Login}></Route>
        </Switch>
      </Rauter>
    </>
  );
}

export default App;
