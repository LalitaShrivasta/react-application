import React, { Component } from 'react';
import './home.css';
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
      return (
        <div className="App">
              <header className="App-header">
                <div className='button'>
               <Link to ='/'> <button className="btn">Home</button></Link>
                <Link to ='/login'><button className="btn">Login</button></Link>
                <Link to ='/profile'><button className="btn">Profile</button></Link>
                </div>
              </header>
              
              <h1>Welcome To Home Page</h1>
                
            </div>
      );
    }
  }
  
  export default Home;
  