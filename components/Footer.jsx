import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ author }) => {
 return (
  <div className={styles.footerContainer}>
   <footer>
    <span>
     Design & illustrations by{' '}
     <span className={styles.authorFooter}>{author}</span>
    </span>
   </footer>
  </div>
 );
};

export { Footer };
