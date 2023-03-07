import './ProjectCardStyles.css';
import ProjectCard from './ProjectCard';
import WorkCardData from './WorkCardData';
import React from 'react';

const Work = () => {
  return (
    <div className='project-section'>
      <div className='project-container'>
        {WorkCardData.map((value, index) => {
          return(
            <ProjectCard 
              key={index}
              imagesource={value.imagesource}
              title={value.title}
              text={value.text}
              stack={value.stack}
              languages={value.languages}
              website={value.website}
              git={value.git}
              enternal={value.enternal}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Work