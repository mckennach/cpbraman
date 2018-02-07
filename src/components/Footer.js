import React, { Component } from 'react';


export default class Footer extends Component {
  constructor(props){
    super(props);

  }



  render() {


    return (
      <footer className="flex" id="footer">
        <div id="mailing-list">
          <h2>Join Our Mailing List</h2>
          <input type="text" className="mailing-input-text" />
          <button>Join</button>
        </div>

        <div id="address">
          <h2>Location</h2>
          <p>2330 Chagrin Boulevard, Suite 102</p>
          <p>Beachwood, Ohio 44122</p>
        </div>

        <div id="contact-info">
          <h2>Contact Us</h2>
          <p>Phone: (216) 831-8180</p>
          <p>Fax: (216) 831-8207</p>
          <p>Email: EBraman@cpbco.com</p>
        </div>

      </footer>
    );
  }
}
