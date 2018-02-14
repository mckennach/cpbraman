import React, { Component } from 'react';
import PageSectionsContainer from '../PageSectionsContainer';
import {
  Link
} from 'react-router-dom';
import logo2 from '../../img/test-logo.svg';

export default class Home extends Component {
  constructor(props){
    super(props);

  }


  render() {

    return (
      <div className="page" id="home">
      <div className="mobile-block"></div>
        <div className="flex flex-row-reverse home-banner container">


          <div className=" inner-container">
                  <h3>WHO WE ARE</h3>
                  <p className="light-weight">
                    A full service real estate appraisal firm which specializes in complex appraisal problems and special purpose properties. Emily Braman, MAI, SRA, AI-GRS has been President and Chief Appraiser of C. P. Braman & Company since 1991
                  </p>
                  <Link to="/contact"><button>Contact Us</button></Link>
                  <div className="home-banner-block"></div>


          </div>

          <div className="flex center home-logo-container">
            <img src={logo2} className="home-logo" alt="Charles P. Braman"/>
          </div>
        </div>
          <PageSectionsContainer
            data={this.props.data}
          />

          <div className="footer-block"></div>


      </div>
    );
  }
}
