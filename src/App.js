import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/users" component={EmployeeList} />
      </Switch>
    );
  }
}

export default App;
