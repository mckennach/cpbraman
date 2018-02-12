import React, { Component } from 'react';
import prof from '../img/prof.jpg';



export default class Profile extends Component {
  constructor(){
      super();
      this.profile = [
        {
          id: 1,
          name: 'Emily Braman',
          imgSrc: prof,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
  }

  render() {
    const profiles = this.profile
    const profileCards = profiles.map((profile) =>
      <div className="prof-card flex" key={profile.id}>
        <div className="prof-pic-container"><img className="prof-pic" src={profile.imgSrc}/></div>
        <br/>
        <div className="prof-info-container">
          <h3 className="prof-name">{profile.name}</h3>
          <p className ="prof-desc">{profile.desc}</p>
        </div>
      </div>

    )

    return (
      <section className="page-section-2" id="staff">
        {profileCards}
      </section>
    );
  }
}
