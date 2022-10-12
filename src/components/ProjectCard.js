import './ProjectCardStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
      <img src={props.imagesource} alt='projectimage' />
      <h2 className='project-title'>{props.title}</h2>
      <div className='project-text'>
        <p>{props.text}</p>
        <div className='project-buttons'>
          {!props.enternal ? <a href={props.website} target="_blank" rel="noreferrer" className='url-btn'>View Website</a> : <Link to={props.website} target="_blank" rel="noreferrer" className='url-btn'>View Website</Link>}
          {!props.enternal ? <a href={props.git} target="_blank" rel="noreferrer" className='git-btn'>View Github</a> : <Link to={props.git} target="_blank" rel="noreferrer" className='git-btn'>Visit Github</Link>}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard