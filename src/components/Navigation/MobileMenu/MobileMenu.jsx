import './MobileMenu.css'
const MobileMenu = (props) => {
    const links = [{ link: '#home', label: 'Home' }, { link: '#aboutme', label: 'About Me' }, { link: '#skills', label: 'Skills' }, { link: '#projects', label: 'Projects' }, { link: '#contact', label: 'Contact' },]
    const cssClasses = [
        "mobileMenuContainer",
        props.toggleMenu ? "openMenu" : "closeMenu"
    ];
    console.log(cssClasses.join(' '))
    return (
        <div className={cssClasses.join(' ')}>
            {
                links.map((link, index) => (
                    <p key={index} className='navbarParagraph'><a onClick={() => props.setToggleMenu(false)} className='navbarLink' href={link.link}>{link.label}</a></p>
                ))
            }
        </div>
    )
}

export default MobileMenu