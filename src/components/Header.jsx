import React from 'react';
import '../styles.css';

// assets

import oneness from '../assets/images/icons/ohm.svg';

const Header = ({ img, author, experience, subjectType, gradeLevel }) => {
 console.log(author);

 return (
  <header className='header-container'>
   <div className='header-title'>
    <h1>Pick or Come Up With a Quote And Express it Artistically</h1>
    <div className='image-container'>
     <img src={img} alt='logo' />
    </div>
   </div>
   <div className='header-description'>
    <div className='desc-content'>
     <p>author</p>
     <span className='header-author'>{author}</span>
    </div>
    <div className='desc-content'>
     <p>Experience</p>
     <span>Project : {experience}</span>
    </div>
    <div className='desc-content'>
     <p>subject type</p>
     <span>Art : {subjectType}</span>
    </div>
    <div className='desc-content'>
     <p>grade level</p>
     <span>{gradeLevel} grade</span>
    </div>
   </div>
  </header>
 );
};

export { Header };
