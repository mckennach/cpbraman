import React, { Component } from 'react';
import ReviewProjects from '../ReviewProjects';
import PageSectionsContainer from '../PageSectionsContainer';


export default class Reviews extends Component {


  render() {


    return (
      <div className="page" id="reviews">
        <div className="page-banner">
            <h1 className="regular-weight">Reviews</h1>
        </div>


        <PageSectionsContainer
          data={this.props.data}
        />



        <div id="review-project-container">
          <h2>A few large appraisal review projects that we have completed</h2>
          <ReviewProjects />
        </div>

        <div className="footer-block"></div>

      </div>

    );
  }
}
