import React, { Component } from "react";

import { Route, Switch ,Redirect} from "react-router-dom";

// import TodoList from "./pages/todoList/index";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";
import About from "./pages/about";
import Home from "./pages/home";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to='/about'/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
