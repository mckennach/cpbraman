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
        <section className="page-section-2" id="clients-container-2">

          <div className="inner-container">
            <h3>WHO WE ARE</h3>

            <p>We are a full service real estate appraisal firm which specializes in complex appraisal problems and special purpose properties.
            Emily Braman has been President and Chief Appraiser of C. P. Braman & Company since 1991.</p>
          </div>

          <div className="img-block"></div>
        </section>
        <Clients />



      </div>
    );
  }
}
