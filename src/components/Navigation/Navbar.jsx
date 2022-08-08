import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/logo.jpg'
import classes from './Navbar.module.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const menuClass = toggleMenu ? `${classes.mobileMenuContainer} ${classes.openMenu}` : `${classes.mobileMenuContainer}`
    const links = [{ link: '#home', label: 'Home' }, { link: '#aboutme', label: 'About Me' }, { link: '#skills', label: 'Skills' }, { link: '#projects', label: 'Projects' }]
    return (
        <div className={classes.navbarContainer}>
            <div className={classes.navbarLogo}>
                <img src={logo} alt='Logo' />
                <h1>Muamer Alickovic</h1>
            </div>
            <div className={classes.navbarLinks}>
                <div className={classes.navbarDesktopLinks}>
                    {
                        links.map((link, index) => (
                            <Link key={index} className={classes.navbarParagraph} to={'/' + link.link}>{link.label}</Link>
                        ))
                    }
                </div>
                <div className={classes.navbarMobileLinks}>
                    {toggleMenu ? (
                        <RiCloseLine
                            className={classes.menuIcon}
                            color='#000000'
                            size={27}
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <RiMenu3Line
                            className={classes.menuIcon}
                            color='#000000'
                            size={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className={menuClass}>
                            <div className={classes.mobileNavbarHeader}>
                                <p>Let's work together <br/>and create something wonderful</p>
                            </div>
                            <div className={classes.mobileNavbarLinks}>
                                {
                                    links.map((link, index) => (
                                        <Link key={index} className={classes.navbarParagraph}  onClick={() => setToggleMenu(false)} to={'/' + link.link}>{link.label}</Link>
                                    ))
                                }
                            </div>
                            <div className={classes.mobileNavbarContact}>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar