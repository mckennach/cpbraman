import React, { Component } from 'react';

import MapContainer from '../MapContainer';


export default class Contact extends Component {
  constructor(){
    super();

  }
  render() {

    return (
      <div className="page-container" id="contact">
        <div className="page-banner">
          <h1>Contact Us</h1>
        </div>
        <section id="contact-info-container" className="page-section-1">
          <div className="inner-container">
            <h3>Address</h3>
            <p>2330 Chagrin Boulevard, Suite 102</p>
            <p>Beachwood, Ohio 44122</p>

            <h3>Phone</h3>
            <a href="tel:2168318180">216-831-8180</a>

            <h3>Fax</h3>
            <p>216-831-8207</p>

            <h3>Email</h3>
            <p>EBraman@cpbco.com</p>
          </div>
          <form className="contact-form">
          Your Name:
          <input type="text" name="name" value=""/>
          <br/>
          Company:
          <input type="text" name="company" value=""/>
          <br/>
          Email Address:
          <input type="email" name="email" value=""/>
          <br/>
          Message:
          <textarea defaultValue="Write Message Here" name="message" rows="10" cols="30">

          </textarea>
          <br/><br/>
          <input type="submit" value="Submit"/>
          </form>

        </section>





        <MapContainer />

      </div>
    );
  }
}
