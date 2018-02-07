import React, { Component } from 'react';
import PageSections from './PageSections';

const PageSectionsContainer = (props) => {
  let sections = props.data.map((section) => {
    return <PageSections
              key={section.id}
              id={section.id}
              class={section.class}
              title={section.title}
              desc={section.desc}
              desc2={section.desc2}
              imgUrl={section.imgUrl}
            />
  });

  return (
    <div className="page-section-container">
      {sections}
    </div>
  )
}

export default PageSectionsContainer;
