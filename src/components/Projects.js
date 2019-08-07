import React from 'react';
import '../styles/projects.scss';

export default function Projects() {
  return (
    <div id='projects' className='projects-container'>
      <div className='line'></div>
      <div className='inner-projects-container'>
        <h1>Projects</h1>
          <div className='project crookbook'>
            <h2>CrookBook</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='https://github.com/evanhessler/CrookBook' className='button'>See Code</a>
          </div>
          <div className='project dodgers'>
            <h2>Dodgers Scores</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='https://github.com/averdin2/Dodgers_Scores' className='button'>See Code</a>
          </div>
          <div className='project mlb'>
            <h2>MLB Player Stats</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='https://github.com/averdin2/MLB_Stats' className='button'>See Code</a>
          </div>
          <div className='project paneljumper'>
            <h2>Panel Jumper</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a href='https://github.com/averdin2/Panel-Jumper' className='button'>See Code</a>
          </div>
      </div>
    </div>
  )
}
