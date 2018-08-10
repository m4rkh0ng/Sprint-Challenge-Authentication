import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import SignIn from '../components/auth/SignIn';
import SignOut from '../components/auth/SignOut';
import Users from '../components/users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;
