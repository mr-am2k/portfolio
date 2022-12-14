/* eslint-disable react/jsx-no-target-blank */
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <h1>Muamer</h1>
            <div className={classes.footerIcons}>
                <a href='https://github.com/mr-am2k' target='_blank'><AiFillGithub className={classes.icon} /> </a>
                <a href='https://www.instagram.com/a.muaamer/' target='_blank'><AiFillInstagram className={classes.icon} /> </a>
                <a href='https://www.facebook.com/muamer.alickovic.16' target='_blank'><BsFacebook className={classes.iconFb} /> </a>
            </div>
            <p>©️ 2022 copyright all right reserved</p>
        </div>
    )
}

export default Footer