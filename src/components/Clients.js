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
      <section className="page-section-3" id="clients">
        <h3>Clients & Partners</h3>
        <div id="client-imgs" className="inner-container">
          <img src={clinic} />
          <img src={metroparks} />
          <img src={logo} />
        </div>

        <div className="inner-container">
          <button>See More</button>
        </div>

      </section>
    );
  }
}
