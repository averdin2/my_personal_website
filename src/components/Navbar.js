import React, { Component } from 'react';
import ReactDOM from "react-dom";
import '../styles/navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenuClass: false
    }
  }

  toggleMenu = () => {
    // Toggles the class of the nav bar that slides over
    let activeStatus = this.state.toggleMenuClass
    this.setState({toggleMenuClass: !activeStatus})
    // Toggles the links that slide with the nav bar
    const node = ReactDOM.findDOMNode(this);
    const links = node.querySelectorAll('.nav-links li');
    links.forEach((link, index) => {
      if (activeStatus) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
      console.log(link.style.animation);
    })
  }
  
  render() {
    return (
      <div>
        <nav>
          <div className="nav-title">AV</div>
            <ul className={this.state.toggleMenuClass ? "nav-active nav-links" : "nav-links"}>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Me</a></li>
              <li><a href='#'>Projects</a></li>
              <li><a href='#'>Contact</a></li>
             </ul>
             <div className={this.state.toggleMenuClass ? "toggle burger-menu" : "burger-menu"} onClick={this.toggleMenu}>
               <div className="line1"></div>
               <div className="line2"></div>
               <div className="line3"></div>
             </div>
        </nav>
        
      </div>
    )
  }
}

export default Navbar;
