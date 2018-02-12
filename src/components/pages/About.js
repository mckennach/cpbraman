import React, { Component } from 'react';
import Profile from '../Profile';
import Clients from '../Clients';


export default class About extends Component {


  render() {
    return (
      <div className="page-container" id="about">
        <div className="page-banner">
          <h1>About Us</h1>
        </div>
        <Profile />


          <Clients />

      




      </div>
    );
  }
}
