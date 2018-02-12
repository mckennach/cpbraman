import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';




export default class NavPanel extends Component {
  constructor(){
    super();
    this.state = {
      toggled: ""
    }


  }
  render() {
    var navState = "";

    if(this.props.toggled){
      navState = "opened";
    } else {
      navState = "";
    }


    const navClick = (event) => {
        const nav = document.querySelector('.nav-icon').classList;
        nav.toggle('open');
        if(nav.contains('open')){
          this.props.toggleNav(true);
        } else {
          this.props.toggleNav(false);
        }
    }


    return (
      <div className={navState} id="nav-panel-container">
        <div id="nav-panel">
          <div id="nav-panel-block">
          <div id="mobile-nav-container">
            <div id="nav">
            </div>
          </div>

          </div>
          <nav>
            <ul>
              <NavLink exact to="/"><li className="panel-link">Home</li></NavLink>
              <NavLink to="/about"><li className="panel-link">About</li></NavLink>
              <NavLink to="/services/appraisals"><li className="panel-link">Appraisals</li></NavLink>
              <NavLink to="/services/reviews"><li className="panel-link">Reviews</li></NavLink>
              <NavLink to="/services/consulting"><li className="panel-link">Consulting</li></NavLink>
              <NavLink to="/services/Litigation"><li className="panel-link">Litigation</li></NavLink>
              <NavLink to="/services/impact-studies"><li className="panel-link">Impact Studies</li></NavLink>
              <NavLink to="/contact"><li className="panel-link">Contact</li></NavLink>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
