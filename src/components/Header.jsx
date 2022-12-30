import styles from './Header.module.css';
import logo from '../assets/images/logo.svg';
import experienceLogo from '../../src/assets/images/experience.svg';
import house from '../assets/images/icons/house.svg';
import Hero from './Hero';

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

const Header = ({ setIsOpen, profile, setProfile }) => {

    const {
        headerWrapper,
        headerContainer,
        navContainer,
        navLogoContainer,
        imageContainer,
        navTitle,
        buttom,
        buttomText,
        houseImage
    } = styles

    const logOut = () => {
        setProfile({});
    };
    return (
        <div className={headerWrapper}>
            <header className={headerContainer}>
                <div className={navContainer}>
                    <div className={navLogoContainer}>
                        <div className={imageContainer}>
                            <img src={experienceLogo} alt='logo' />
                        </div>
                        <span className={navTitle}>Catalog</span>
                    </div>
                    {isEmpty(profile) ? (
                        <button className={buttom}>
                            <img className={houseImage} src={house} alt='house' />
                            <span onClick={() => setIsOpen(true)} className={buttomText}>
                                login
                            </span>
                        </button>
                    ) : (
                        <button className={buttom}>
                            <img className={houseImage} src={house} alt='house' />
                            <span onClick={() => logOut()} className={buttomText}>
                                {`${profile.given_name.charAt(0)} ${profile.family_name.charAt(0)}`}
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
