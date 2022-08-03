import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.jpg'
import classes from './Navbar.module.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const menuClass = toggleMenu ? `${classes.mobileMenuContainer} ${classes.openMenu}` : `${classes.mobileMenuContainer}`
    const links = [{ link: '#home', label: 'Home' }, { link: '#aboutme', label: 'About Me' }, { link: '#skills', label: 'Skills' }, { link: '#projects', label: 'Projects' }, { link: '#contact', label: 'Contact' },]
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
                            <p key={index} className={classes.navbarParagraph}><a className={classes.navbarLink} href={link.link}>{link.label}</a></p>
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
                            {
                                links.map((link, index) => (
                                    <p key={index} className={classes.navbarParagraph}><a onClick={() => setToggleMenu(false)} className={classes.navbarLink} href={link.link}>{link.label}</a></p>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar