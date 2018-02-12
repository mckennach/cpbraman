import React, { Component } from 'react';
import clinic from '../img/clinic.svg';
import metroparks from '../img/metroparks.svg';
import logo from '../img/logo-global.svg';




export default class Profile extends Component {
  constructor(){
      super();

  }

  render() {



    return (
      <section className="page-section-1" id="clients">
      <h3 className="clients-header relative">Clients & Partners</h3>
        <div id="client-imgs" className="flex ">
          <img src={clinic} />
          <img src={metroparks} />
          <img src={logo} />
        </div>

        <div className="see-more-btn">
          <button>See More</button>
        </div>

      </section>
    );
  }
}
