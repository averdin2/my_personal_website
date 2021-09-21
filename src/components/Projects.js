import React from 'react';
import '../styles/projects.scss';

export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <div className="line"></div>
      <h1>Projects</h1>
      <div className="inner-projects-container">
        <div className="project pomodoro">
          <h2>Pomodoro Timer</h2>
          <p>A React web app that acts as a working Pomodoro Timer. </p>
          <div className="buttons">
            <a href=" https://averdin2.github.io/React_Pomodoro/" className="button">
              See Site
            </a>
            <a href="https://github.com/averdin2/React_Pomodoro" className="button">
              See Code
            </a>
          </div>
        </div>
        <div className="project mlb">
          <h2>MLB Player Stats</h2>
          <p>A website for stats of all current MLB players sorted by their team. </p>
          <div className="buttons">
            <a href="https://averdin2.github.io/MLB_Stats/" className="button">
              See Site
            </a>
            <a href="https://github.com/averdin2/MLB_Stats" className="button">
              See Code
            </a>
          </div>
        </div>
        <div className="project covid">
          <h2>Covid-19 Charts</h2>
          <p>A website that provides data charts for Covid-19 cases.</p>
          <div className="buttons">
            <a href="https://averdin2.github.io/Covid-19-data-charts/" className="button">
              See Site
            </a>
            <a href="https://github.com/averdin2/Covid-19-data-charts" className="button">
              See Code
            </a>
          </div>
        </div>
        <div className="project dodgers">
          <h2>Dodgers Scores</h2>
          <p>A website that provides gameday scores for Los Angeles Dodger's Games. </p>
          <div className="buttons">
            <a href="https://github.com/averdin2/Dodgers_Scores" className="button">
              See Code
            </a>
          </div>
        </div>

        <div className="project paneljumper">
          <h2>Panel Jumper</h2>
          <p>A 2D infinite jumper game seeking to add a unique take to the genre. </p>
          <a href="https://github.com/averdin2/Panel-Jumper" className="button">
            See Code
          </a>
        </div>
      </div>
    </div>
  );
}
