import React from 'react';
import '../styles/contact.scss';

export default function Contact() {
  return (
    <div id='contact' className='contact-container'>
      <div className='line'></div>
      <div className='inner-contact-container'>
        <h1>Contact</h1>
        <div className='contact'>
          <h2>Email</h2>
          <p>alexverdin01@gmail.com</p>
        </div>
        <div className='contact'>
          <h2>LinkedIn</h2>
          <a href='https://www.linkedin.com/in/alex-v-verdin/'>Check my LinkedIn here</a>
        </div>
        <div className='contact'>
          <h2>GitHub</h2>
          <a href='https://github.com/averdin2'>Check my GitHub here</a>
        </div>
      </div>
    </div>
  )
}
