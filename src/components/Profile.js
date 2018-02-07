import React, { Component } from 'react';
import prof from '../img/prof.jpg';



export default class Profile extends Component {
  constructor(){
      super();
      this.profile = [
        {
          id: 1,
          name: 'Some Name',
          imgSrc: prof,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 2,
          name: 'Some Name',
          imgSrc: prof,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 3,
          name: 'Some Name',
          imgSrc: prof,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
  }

  render() {
    const profiles = this.profile
    const profileCards = profiles.map((profile) =>
      <div className="prof-card" key={profile.id}>
        <img className="prof-pic" src={profile.imgSrc}/>
        <br/>
        <span className="prof-name">{profile.name}</span>
        <p className ="prof-desc">{profile.desc}</p>
      </div>

    )

    return (
      <section className="page-section-1" id="staff">
        {profileCards}
      </section>
    );
  }
}
