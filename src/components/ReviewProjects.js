import React, { Component } from 'react';

var Slider = require('react-slick').default;


export default class ReviewProjects extends Component {
  constructor(){
    super();
    this.projects = [
      {
        location: 'Euclid Corridor Transportation Project',
        parcels: '300+',
        desc: 'These properties are located all along the Euclid Corridor and involve mostly strip takings and some total takings for the improvements to Euclid Avenue for the BRT project. The project was overseen by both the GCRTA and the Federal Transit Authority. There were four appraisers involved in this multi-year project. The property types included parking lots, loft style warehouse buildings, gas stations, abandoned buildings, properties owned by the Cleveland Clinic and other University Circle institutions, the Pierres Ice Cream manufacturing plant and many others.'
      },
      {
        location: 'Innerbelt Bridge for ODOT',
        parcels: '',
        desc: 'These high profile properties include the Cleveland Cold Storage Building, Gillota Fuel Building, State Chemical Plant and others.'
      },
      {
        location: 'Route 20 in Ashtabula County for ODOT',
        parcels: '61',
        desc: ' Issues on this project included proximity to residential homes, loss of access to a dry cleaners drive through window, loss of front parking on retail properties and others.'
      },
      {
        location: 'Route 87 in Trumbull County',
        parcels: '84',
        desc: 'These appraisals involved strip takings for the widening of State Route 87 in Trumbull County for a buggy lane. The properties were rural and rural residential in nature and included many Amish farms.'
      },
      {
        location: 'Bishop Road in Willoughby Hills and Wickliffe',
        parcels: '60',
        desc: 'Appraisal Reviews of 60 parcels on Bishop Road for the widening of the intersection of Bishop & Chardon Road to I-90 in Willoughby Hills and Wickliffe. The appraisals on this project included a car dealership, retail properties, houses with proximity damages, a shopping center, a drug store and others.'
      },
      {
        location: 'East Market Street in Akron, Ohio',
        parcels: '33',
        desc: 'This project included a manufacturing plant which lost access to its loading dock.'
      },
      {
        location: 'Tuscarawas Bridge',
        parcels: '50',
        desc: 'These properties included industrial properties with loss of parking, residential properties with proximity issues, a Burger King with a loss of access and many others.'

      },
      {
        location: 'Lake 20 in Painesville, Ohio',
        parcels: '120',
        desc: 'This review project involved three appraisal firms and two municipalities. The appraisals were for the widening of Lake 20 in Painesville, Ohio. The property types were primarily commercial and there were several used car dealership properties with loss of front display space.'
      },
      {
        location: 'Pelton Road in Willoughby',
        parcels: '',
        desc: 'Appraisal Reviews of residential properties on Pelton Road for the City of Willoughby.'
      },
      {
        location: 'MAH/TRU 711',
        parcels: '100',
        desc: 'Appraisal Reviews of 100 parcels by 3 appraisal firms on MAH/TRU 711. These parcels were primarily inner city residential properties and included a Trailer Park and some older commercial and industrial buildings.'
      },
      {
        location: 'Cleveland Hopkins Airport Noise Abatement Project Area',
        parcels: '135',
        desc: 'Appraisal Reviews 135 appraisals reviews of residences in the Cleveland Hopkins Airport Noise Abatement Project Area - 1991-1994. These were appraisals of occupied homes which were purchased by the City of Cleveland due to proximity to the airport. These appraisals conformed to FAA requirements.'
      }
    ]
    this.state = {

    }
  }
  render() {
    var settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };
    const projects = this.projects
    const projectComps = projects.map((item) =>

      <div key={item.location}>
        <span className="proj-tag">Location: </span><span className="project-text">{item.location}</span>
        <br/>
        <br />
        <span className="proj-tag">Parcels: </span><span className="project-text">{item.parcels}</span>
        <br/>
        <br />
        <p className="project-desc">{item.desc}</p>
      </div>

    )
    return (
      <div id="review-project-component-list">
        <Slider {...settings} className="project-component">
          {projectComps}

        </Slider>
      </div>
    );
  }
}
