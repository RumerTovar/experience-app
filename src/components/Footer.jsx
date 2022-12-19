import React from 'react';
import '../styles.css';
import styles from './Header.module.css';

const Footer = ({ author }) => {
 return (
  <div className='footer-container'>
   <footer>
    <span>
     Design & illustrations by <span className='author-footer'>{author}</span>
    </span>
   </footer>
  </div>
 );
};

export { Footer };
