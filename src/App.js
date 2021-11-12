import React from "react";
import Navbar from "./components/layout/Navbar";

import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/home";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router basename={process.env.PUBLIC_URL} >
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
           
            <Route exact path="/user/:login" component={User} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
