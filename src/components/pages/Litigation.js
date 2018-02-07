import React, { Component } from 'react';
import PageSectionsContainer from '../PageSectionsContainer';


export default class Litigation extends Component {


  render() {
    return (
      <div className="page-container" id="litigation">
        <div className="page-banner">
          <h1>Litigation</h1>
        </div>

        <PageSectionsContainer
          data={this.props.data}
        />

      </div>
    );
  }
}
