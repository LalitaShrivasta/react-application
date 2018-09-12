import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login.js';
import Profile from './components/profile.js';
import Home from './components/home.js';
import {BrowserRouter as Router , Route}  from "react-router-dom";



class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Route exact path="/" component={Home}/> 
              <Route path="/Profile" component={Profile}/> 
              <Route path="/login" component={Login}/> 
          </div>
        </Router>
    );
  }
}

export default App;
