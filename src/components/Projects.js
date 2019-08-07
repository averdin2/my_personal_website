import React from 'react';
import '../styles/projects.scss';

export default function Projects() {
  return (
    <div id='projects' className='projects-container'>
      <div className='line'></div>
      <div className='inner-projects-container'>
        <h1>Projects</h1>
          <div className='project crookbook'>
            <h3>CrookBook</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='#' className='button'>See Code</a>
          </div>
          <div className='project dodgers'>
            <h3>Dodgers Scoreboard</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='#' className='button'>See Code</a>
          </div>
          <div className='project mlb'>
            <h3>MLB Player Stats</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='#' className='button'>See Code</a>
          </div>
          <div className='project paneljumper'>
            <h3>Panel Jumper</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='#' className='button'>See Code</a>
          </div>
      </div>
    </div>
  )
}
