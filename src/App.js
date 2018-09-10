import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Index from './page/index'
import Post from './page/post'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route exact path='/index' component={Index}/>
        <Route path='/post' component={Post}/>
      </Switch>
    );
  }
}

export default App;
