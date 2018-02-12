import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/test-logo.svg';



function dropDown(isMobile){
  console.log('hello');
  var dropDown = document.getElementById('main-drop-down');
  //var pageOverlay = document.getElementById('page-overlay');
  console.log(dropDown);
  console.log(dropDown.classList.contains('opened'));
  if(dropDown.classList.contains('opened')){
    dropDown.classList.remove('opened');
    //pageOverlay.classList.add('hide');
  } else{

    dropDown.classList.add('opened');
    //pageOverlay.classList.remove('hide');
  }

}

function Nav(isMobile, navClick){
    var pageOverlay = document.getElementById('page-overlay');
    if(isMobile){
      pageOverlay.classList.add('hide');
      return (
        <div id="mobile-nav-container">

          <div id="nav-icon" className="relative nav-icon" onClick={navClick}>
            <span className="absolute"></span>
            <span className="absolute"></span>
            <span className="absolute"></span>
          </div>
        </div>
      )
    } else {
      return (
        <nav id="main-nav">
          <div id="main-nav-ul">
            <NavLink className="text-white main-nav-li" to="/about" ><span className="relative">ABOUT US</span></NavLink>
            <div className="text-white main-nav-li" onClick={dropDown} id="drop-down-toggle"><span className="relative">SERVICES</span>
              <div className="main-nav-dropdown" id="main-drop-down">
                <div className="absolute" id="dropdown-arrow"></div>
                <div className="absolute space-around center flex left text-white full-width" id="dropdown-nav-ul">
                  <NavLink className="dropdown-li" to="/services/appraisals"><span className="relative">Appraisal</span></NavLink>
                  <NavLink className="dropdown-li" to="/services/reviews"><span className="relative">Reviews</span></NavLink>
                  <NavLink className="dropdown-li" to="/services/consulting"><span className="relative" >Consulting</span></NavLink>
                  <NavLink className="dropdown-li" to="/services/litigation"><span className="relative">Litigation</span></NavLink>
                  <NavLink className="dropdown-li" to="/services/impact-studies"><span className="relative">Impact Studies</span></NavLink>
                </div>
              </div>
            </div>
            <NavLink className="text-white  main-nav-li" to="/contact"><span className="relative">CONTACT</span></NavLink>
          </div>

        </nav>
      )
    }
}

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      navClick: this.navClick.bind(this),
      dropDown: ''
    }
  }

  navClick = (event) => {
      const nav = document.getElementById('nav-icon').classList;
      nav.toggle('open');
      if(nav.contains('open')){
        this.props.toggleNav(true);
      } else {
        this.props.toggleNav(false);
      }
  }

  render() {
    var nav = Nav(this.props.isMobile, this.state.navClick);


    return (
      <div id="header" className="fixed full-width center space-between flex background-light-blue text-white">
        <div className="relative header-logo" id="header-logo">
          <NavLink className="absolute" to="/"><img className="absolute main-nav-logo" src={logo2} /></NavLink>
        </div>
        <div className="relative header-logo-mobile" id="header-logo">
          <NavLink className="absolute" to="/"><img className="absolute mobile-nav-logo" src={logo3} /></NavLink>
        </div>
        {nav}

      </div>
    );
  }
}
