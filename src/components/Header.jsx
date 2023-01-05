import styles from './Header.module.css';
import logo from '../assets/images/logo.svg';
import experienceLogo from '../../src/assets/images/experience.svg';
import house from '../assets/images/icons/house.svg';
import Hero from './Hero';

const isEmpty = (obj) => {
 return Object.keys(obj).length === 0;
};

const Header = ({ setIsOpen, profile, setProfile }) => {
 const logOut = () => {
  setProfile({});
 };
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
      <button className={styles.buttom}>
       <img className={styles.houseImage} src={house} alt='house' />
       <span onClick={() => logOut()} className={styles.buttomText}>
        {`${profile?.firstName.charAt(0)} ${profile?.lastName.charAt(0)}`}
       </span>
      </button>
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
