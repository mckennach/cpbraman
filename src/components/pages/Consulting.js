import React, { Component } from 'react';
import PageSectionsContainer from '../PageSectionsContainer';


export default class Consulting extends Component {


  render() {
    return (
      <div className="page-container" id="consulting">
        <div className="page-banner">
          <h1>Consulting</h1>
        </div>

        <PageSectionsContainer
          data={this.props.data}
        />


      </div>
    );
  }
}
