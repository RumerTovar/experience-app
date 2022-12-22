import React from 'react';
import '../styles.css';
import styles from './Header.module.css';

// assets

import oneness from '../assets/images/icons/ohm.svg';
import experienceLogo from '../../src/assets/images/experience.svg';
import house from '../assets/images/icons/house.svg';

const Header = ({ img, author, experience, subjectType, gradeLevel }) => {
    
    return (
        <>
            <header className='header-container'>
                <div className={styles.navContainer}>
                    <div className={styles.navLogoContainer}>
                        <div className={styles.imageContainer}>
                            <img src={experienceLogo} alt='logo' />
                        </div>
                        <span className={styles.navTitle}>Catalog</span>
                    </div>
                    <button className={styles.buttom}>
                        <img className={styles.houseImage} src={house} alt='house' />
                        <span className={styles.buttomText}>LOGIN</span>
                    </button>
                </div>
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
        </>
    );
};

export { Header };
