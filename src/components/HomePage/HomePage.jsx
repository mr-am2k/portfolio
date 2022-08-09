/* eslint-disable react/jsx-no-target-blank */
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import classes from './HomePage.module.css';
const HomePage = () => {
    return (
        <div id='home' className={classes.homePage}>
            <h1>Hello there, I'm <span>Muamer</span> </h1>
            <h1>Software engineering student and <br /> Web developer </h1>
            <p>I'm software engineering student passionate about web development.
                Currently I'm working on some personal projects to improve my knowledge about both, front-end and back-end.
            </p>
            <a href='../../assets/muamercv.pdf' download="Muamer's resume">
                <button type='button'>Download Resume</button>
            </a>
            <div className={classes.contactIcons}>
                <a href='https://github.com/mr-am2k' target='_blank'><AiFillGithub className={classes.icon} /> </a>
                <a href='https://www.instagram.com/a.muaamer/' target='_blank'><AiFillInstagram className={classes.icon} /> </a>
                <a href='https://www.facebook.com/muamer.alickovic.16' target='_blank'><AiFillFacebook className={classes.icon} /> </a>
            </div>
        </div>
    )
}

export default HomePage