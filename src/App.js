import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/layout/Navigation";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
