import React, { Component } from 'react';



export default class Home extends Component {


  render() {
    return (
      <div id="home">
        <div className="block">
        <div className="inner-container">
          <h3>WHO WE ARE</h3>
          <p>
            A full service real estate appraisal firm which specializes in complex appraisal problems and special purpose properties. Emily Braman, MAI, SRA, AI-GRS has been President and Chief Appraiser of C. P. Braman & Company since 1991
          </p>
          <button>Contact Us</button>
        </div>
        </div>



        <section className="page-section-1" id="what">
          <div className="img-block"></div>
          <div className="inner-container">
            <h3>WHAT WE DO</h3>
            <p>
              We provide real estate appraisals, appraisal reviews and consulting services including ad valorum tax consulting primarily to attorneys and government agencies. We provide expert witness testimony for a variey of issues including eminent domain, ad valorum taxes and other probate proceedings.
            </p>
            <button>See What We Do</button>
          </div>
        </section>

        <section className="page-section-2" id="cert">

          <div className="inner-container">
          <h3>WHERE</h3>
            <p>
              We are EDGE, FBE or DBE certified by many agencies in Ohio. C. P. Braman & Co., Inc. was established in 1958 and serves Northeastern Ohio area and surrounding areas.</p>
          </div>
          <div className="img-block"></div>
        </section>


      </div>
    );
  }
}
