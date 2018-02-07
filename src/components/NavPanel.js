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
            <div  className="nav-icon panel-icon" onClick={navClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          </div>
          <nav>
            <ul>
              <NavLink activeClassName="selected" exact to="/"><li>Home</li></NavLink>
              <NavLink activeClassName="selected" to="/about"><li>About</li></NavLink>
              <NavLink activeClassName="selected" to="/appraisals"><li>Appraisals</li></NavLink>
              <NavLink activeClassName="selected" to="/reviews"><li>Reviews</li></NavLink>
              <NavLink activeClassName="selected" to="/consulting"><li>Consulting</li></NavLink>
              <NavLink activeClassName="selected" to="/Litigation"><li>Litigation</li></NavLink>

              <NavLink to="/contact"><li>Contact</li></NavLink>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
