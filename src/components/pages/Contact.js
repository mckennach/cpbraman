import React, { Component } from 'react';

import MapContainer from '../MapContainer';


export default class Contact extends Component {
  constructor(){
    super();

  }
  render() {

    return (
      <div className="page" id="contact">
        <div className="page-banner">
          <h1 className="regular-weight">Contact Us</h1>
        </div>
        <section id="" className="flex contact-page">
          <div className="contact-info-container">

            <div className="relative contact-inner-container">

                <center><h3>Charles P. Braman & CO., INC.</h3></center>



                <a className="relative center flex footer-icon" href="tel:216-831-8180"><i className="material-icons">phone</i></a>
                <a className="relative center flex footer-icon" href="mailto:EBraman@cpbco.com"><i className="material-icons">email</i></a>
                <a className="relative center flex footer-icon" target="_blank" href="https://www.google.com/maps/place/Charles+P+Braman+%26+Co+Inc/@41.4640741,-81.516863,17z/data=!3m1!4b1!4m5!3m4!1s0x883102a08c36aae9:0xe9baf7ef76718ef2!8m2!3d41.4640701!4d-81.5146743"><i className="material-icons">place</i></a>
                <div className="absolute contact-captions">
                  <span className="relative light-weight phone">(216) 831-8180</span>
                  <br/>
                  <span className="relative light-weight email">EBraman@cpbco.com</span>
                  <br/>
                  <span className="relative light-weight address1">2330 Chagrin Boulevard, Suite 102</span>
                  <br/>
                  <span className="relative address2 light-weight">Beachwood, Ohio 44122</span>
                </div>
            </div>


          </div>


          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.8543561417487!2d-81.51686298480323!3d41.464074099200914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883102a08c36aae9%3A0xe9baf7ef76718ef2!2sCharles+P+Braman+%26+Co+Inc!5e0!3m2!1sen!2sus!4v1518046295536" ></iframe>

        </section>

        <div className="footer-block"></div>

      </div>
    );
  }
}
