import React, { Component } from 'react';



export default class Appraisals extends Component {

  constructor(props){
    super(props);
    this.state = this.props.data
  }

  render() {
    const propertyTypes = this.state.propertyTypes
    const problems = this.state.complexProblems
    //builds list sections.. if you need to add anything else, add to object
    const propertySection = propertyTypes.map((item) =>
      <ul key={item.type}>
        <h3>{item.type} including:</h3>
          {
            item.properties.map((property) =>
              <li key={property}>{property}</li>
            )
          }

      </ul>
    )



    return (
      <div className="page-container" id="appraisals">
        <div className="page-banner">
            <h1 className="regular-weight">Appraisals</h1>
        </div>
        <div className="flex flex-row info-container" id="appraisals-info-container">
          <div className="property-row appraisal-row">
            <div id="property-types-container">
              <h2>PROPERTY TYPES WE SPECIALIZE IN</h2>
              {propertySection}
            </div>
          </div>

          <div className="complex-row appraisal-row">
            <div id="complexity-problems">
              <h2>COMPLEX APPRAISAL PROBLEMS</h2>
              <ul>
                <li><h3>Mass Appraisals for Right of Way Acquistion</h3></li>
                <li><h3>Partial Takings</h3></li>
                <li><h3>Aerial Easements</h3></li>
                <li><h3>Sewer and Utility Easements</h3></li>
                <li><h3>Standard Highway Easements</h3></li>
                <li><h3>Grade Separation Projects</h3></li>
                <li><h3>Slope and Channel Easements</h3></li>
                <li><h3>Temporary Construction Easements</h3></li>
                <li><h3>Conservation and Scenic Preservation Easements</h3></li>
                <li>
                  <h3>Calculation of Damages to the Residue due to:</h3>
                  <ul className="sublist">
                    <li>Proximity</li>
                    <li>Loss of Parking</li>
                    <li>Change in Buildable Area</li>
                    <li>Changes of Highest and Best Use</li>
                    <li>Limitation of Access</li>
                    <li>Loss of Parking</li>
                    <li>Other Factors</li>
                  </ul>
                </li>
                <li><h3>Litigation Involving Zoning, Eminent Domain and Ad Valorem Tax Values</h3></li>
                <li><h3>Leased fee, Leasehold and Partial Interests</h3></li>
                <li><h3>Estate Tax Planning</h3></li>
              </ul>
            </div>

            <div id="standards">
              <div className="inner-container">
                <h3>Appraisal Standards</h3>
                <p>

All our appraisal reports conform to the Uniform Standards of Professional Appraisal Practice (USPAP). We also provide appraisals to meet the standards of State of Ohio and the Uniform Standards for Federal Land Acquisition (commonly known as the "yellow book" standards or the Uniform Act) as necessary. Appraisals for eminent domain conform to all of the standards of the Ohio Department of Transportations Policy & Procedures manual. We are also able to conform to the requirements of the Federal Aviation Administration, the Federal Highway Administration and other agencies.

                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
