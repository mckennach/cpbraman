import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { HomeData, AboutData, AppraisalData, ReviewsData, LitigationData, ConsultingData } from '../data/PageData';

//PAGES
import Home from './pages/Home';
import About from './pages/About';
import Appraisals from './pages/Appraisals';
import Reviews from './pages/Reviews';
import Consulting from './pages/Consulting';
import Litigation from './pages/Litigation';
import Contact from './pages/Contact';

//COMPONENTS
import Header from './Header';
import Footer from './Footer';
import NavPanel from './NavPanel';




class App extends Component {
  constructor(){
    super();
    this.state = {
        isMobile: false,
        width: window.innerWidth,
        height: window.innerHeight,
        toggled: false,
        appClasses: 'App',
      }

      this.dropDown = this.dropDown.bind(this);
  }


     /**
     * Calculate & Update state of new dimensions
     */
    updateDimensions() {
      if(window.innerWidth < 500) {
        this.setState({ width: 450, height: 102 });
      } else {
        let update_width  = window.innerWidth-100;
        let update_height = Math.round(update_width/4.4);
        this.setState({ width: update_width, height: update_height });
      }
      this.isMobile();
    }

    /**
     * Add event listener
     */
    componentDidMount() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    isMobile(){
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1100) {
       this.setState({isMobile: true});
     } else {
       this.setState({isMobile: false, toggled: false});
     }
    }

    toggleNav(toggled) {
      this.setState({toggled});
      if(toggled){
        this.setState({appClasses: 'App no-scroll'});
      } else {
        this.setState({appClasses: 'App'});
      }
    }

    dropDown() {
      if(this.state.isMobile){
        return
      }
      var dropDown = document.getElementById('drop-down');
      var pageOverlay = document.getElementById('page-overlay');
      if(dropDown.classList.contains('opened')){
        dropDown.classList.remove('opened');
        pageOverlay.classList.add('hide');
      }
    }



  render() {

    return (
      <Router>
        <div className={this.state.appClasses}>
          <NavPanel toggleNav={this.toggleNav.bind(this)} isMobile={this.state.isMobile} toggled={this.state.toggled}/>
          <Header toggleNav={this.toggleNav.bind(this)} toggled={this.state.toggled} isMobile={this.state.isMobile}/>

          <div onClick={this.dropDown} id="page-wrapper">
            <div className="hide" id="page-overlay"></div>
            <div className="header-block"></div>
            <Route exact path="/" render={() => <Home data={HomeData}/>} />
            <Route path="/about" render={() => <About data={AboutData}/>}  />
            <Route path="/appraisals" render={() => <Appraisals data={AppraisalData}/>} />
            <Route path="/reviews" render={() => <Reviews data={ReviewsData}/>} />
            <Route path="/consulting" render={() => <Consulting data={ConsultingData}/>} />
            <Route path="/litigation" render={() => <Litigation data={LitigationData}/>} />
            <Route path="/contact" component={Contact} />

            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
