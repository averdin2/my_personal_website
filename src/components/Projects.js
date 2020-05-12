import React from 'react';
import '../styles/projects.scss';

export default function Projects() {
  return (
    <div id='projects' className='projects-container'>
      <div className='line'></div>
      <h1>Projects</h1>
      <div className='inner-projects-container'>

        <div className='project crookbook'>
          <h2>CrookBook</h2>
          <p>A web application database to help the LAPD sort thier old murder case files. </p>
          <a href='https://github.com/evanhessler/CrookBook' className='button'>See Code</a>
        </div>
        <div className="project covid">
          <h2>Covid-19 Charts</h2>
          <p>A website that provides data charts for Covid-19 cases.</p>
          <a href='https://github.com/averdin2/Covid-19-data-charts' className='button'>See Code</a>
        </div>
        <div className='project dodgers'>
          <h2>Dodgers Scores</h2>
          <p>A website that provides gameday scores for live Dodgers Games. </p>
          <div className='buttons'>
            <a href='https://averdin2.github.io/Dodgers_Scores/' className='button'>See Site</a>
            <a href='https://github.com/averdin2/Dodgers_Scores' className='button'>See Code</a>
          </div>
        </div>
        <div className='project mlb'>
          <h2>MLB Player Stats</h2>
          <p>A website for stats of all current MLB players sorted by their team. </p>
          <div className='buttons'>
            <a href='https://averdin2.github.io/MLB_Stats/' className='button'>See Site</a>
            <a href='https://github.com/averdin2/MLB_Stats' className='button'>See Code</a>
          </div>
        </div>
        <div className='project paneljumper'>
          <h2>Panel Jumper</h2>
          <p>A 2D infinite jumper game seeking to add a unique take to the genre. </p>
          <a href='https://github.com/averdin2/Panel-Jumper' className='button'>See Code</a>
        </div>
      </div>
    </div>
  )
}
