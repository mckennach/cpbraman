import React, { Component } from 'react';
import PageSectionsContainer from '../PageSectionsContainer';


export default class ImpactStudies extends Component {


  render() {
    return (
      <div className="page" id="impact-studies">
        <div className="page-banner">
            <h1 className="regular-weight">Impact Studies</h1>
        </div>


        <PageSectionsContainer
          data={this.props.data}
        />



      

        <div className="footer-block"></div>

      </div>

    );
  }
}
