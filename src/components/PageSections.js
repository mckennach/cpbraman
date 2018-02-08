import React, { Component } from 'react';


const PageSections = (props) => (

      <section className={props.class} >
        <div className="relative section-img-box">
          <img className="section-img" src={props.imgUrl} alt="Charles P. Braman & Co., Inc." />
        </div>
        <div className="section-text-box">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <br/>
          <p>{props.desc2}</p>
          {props.btn}
        </div>
      </section>


)


export default PageSections;
