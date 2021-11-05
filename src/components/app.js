import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import Nav from "./nav"
import Home from "./pages/home"
import Posts from "./pages/posts"
import AddPost from "./pages/add-post"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/add-post" component={AddPost} />
        </Switch>
      </div>
    );
  }
}