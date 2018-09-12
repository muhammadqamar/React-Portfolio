import React, { Component } from 'react';
import logo from './logo.svg';
import Sign from './containers/auth/auth';
import Home from './containers/home/home';
import './App.css';
import fire from './fireconfig/config'




class App extends Component {
  state= {

user:false

  }
  componentDidMount() {
     this.authListener();
   }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
    <div>
    {this.state.user?
      <Home />:
  <Sign />
  }
    </div>
    );
  }
}

export default App;
