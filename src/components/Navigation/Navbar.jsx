/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { BsFillTerminalFill, BsFacebook } from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link';
import classes from './Navbar.module.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const menuClass = toggleMenu ? `${classes.mobileMenuContainer} ${classes.openMenu}` : `${classes.mobileMenuContainer}`
    const links = [{ link: '#home', label: 'Home' }, { link: '#aboutme', label: 'About Me' }, { link: '#skills', label: 'Skills' }, { link: '#projects', label: 'Projects' }]
    return (
        <div className={classes.navbarContainer}>
            <div className={classes.navbarLogo}>
                <BsFillTerminalFill className={classes.logo} />
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
                                <p>Let's work together <br />and create something wonderful</p>
                            </div>
                            <div className={classes.mobileNavbarLinks}>
                                {
                                    links.map((link, index) => (
                                        <Link key={index} className={classes.navbarParagraph} onClick={() => setToggleMenu(false)} to={'/' + link.link}>{link.label}</Link>
                                    ))
                                }
                            </div>
                            <div className={classes.contactIcons}>
                                <h3>Let's connect</h3>
                                <a href='https://github.com/mr-am2k' target='_blank'><AiFillGithub className={classes.icon} /> </a>
                                <a href='https://www.instagram.com/a.muaamer/' target='_blank'><AiFillInstagram className={classes.icon} /> </a>
                                <a href='https://www.facebook.com/muamer.alickovic.16' target='_blank'><BsFacebook className={classes.iconFb} /> </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar