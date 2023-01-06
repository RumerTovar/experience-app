import styles from './Header.module.css';
import logo from '../assets/images/logo.svg';
import experienceLogo from '../../src/assets/images/experience.svg';
import house from '../assets/images/icons/house.svg';
import Hero from './Hero';
import { useEffect, useRef, useState } from 'react';

const isEmpty = (obj) => {
 return Object.keys(obj).length === 0;
};

const Header = ({ setIsOpen, profile, setProfile }) => {
 const [logoutVisible, setLogoutVisible] = useState(false);

 const logOut = () => {
  setProfile({});
  setLogoutVisible(false);
 };

 const refLogout = useRef();

 useEffect(() => {
  const closeLogout = (e) => {
   if (refLogout.current && !refLogout.current.contains(e.target)) {
    setLogoutVisible(false);
   }
  };
  document.addEventListener('mousedown', closeLogout);

  return () => {
   document.removeEventListener('mousedown', closeLogout);
  };
 }, [setIsOpen]);

 return (
  <div className={styles.headerWrapper}>
   <header className={styles.headerContainer}>
    <div className={styles.navContainer}>
     <div className={styles.navLogoContainer}>
      <div className={styles.imageContainer}>
       <img src={experienceLogo} alt='logo' />
      </div>
      <span className={styles.navTitle}>Catalog</span>
     </div>
     {isEmpty(profile) ? (
      <button className={styles.buttom}>
       <img className={styles.houseImage} src={house} alt='house' />
       <span onClick={() => setIsOpen(true)} className={styles.buttomText}>
        login
       </span>
      </button>
     ) : (
      <div className={styles.dropdown}>
       <button className={styles.buttom} onClick={() => setLogoutVisible(true)}>
        <img className={styles.houseImage} src={house} alt='house' />
        <span className={styles.buttomText}>
         {`${profile?.firstName.charAt(0)} ${profile?.lastName.charAt(0)}`}
        </span>
       </button>
       {logoutVisible && (
        <div ref={refLogout}>
         <p className={styles.dropdownContent} onClick={() => logOut()}>
          Logout
         </p>
        </div>
       )}
      </div>
     )}
    </div>
    <Hero
     img={logo}
     author={'Luciano Polo'}
     subjectType={'Painting'}
     experience={'Create'}
     gradeLevel={'9th'}
    />
   </header>
  </div>
 );
};

export { Header };
