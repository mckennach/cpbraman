import React, { Component } from 'react';


export default class Footer extends Component {
  constructor(props){
    super(props);

  }



  render() {

    //<span>Fax: (216) 831-8207</span>
    return (
      <footer className="background-light-blue  flex" id="footer">

        <div className="credit">Website made by ©  <a className="text-white hover-underline" target="_blank" href="mckennach.com">Chris McKenna</a></div>
        <div className="flex flex-row " id="contact-info">
          <a className="relative center flex footer-icon" href="tel:216-831-8180"><i className="material-icons">phone</i></a>
          <a className="relative center flex footer-icon" href="mailto:EBraman@cpbco.com"><i className="material-icons">email</i></a>
          <a className="relative center flex footer-icon" target="_blank" href="https://www.google.com/maps/place/Charles+P+Braman+%26+Co+Inc/@41.4640741,-81.516863,17z/data=!3m1!4b1!4m5!3m4!1s0x883102a08c36aae9:0xe9baf7ef76718ef2!8m2!3d41.4640701!4d-81.5146743"><i className="material-icons">place</i></a>
        </div>

      </footer>
    );
  }
}
