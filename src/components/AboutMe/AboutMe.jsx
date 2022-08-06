import classes from './AboutMe.module.css'
import image from '../../assets/muamer.jpg'
const AboutMe = () => {
    return (
        <div id='aboutme' className={classes.aboutMe}>
            <h1>About Me</h1>
            <div className={classes.aboutMeContent}>
                <p>
                    Hello, I'm Muamer Alickovic, a 21-year-old software engineering student at the Polytechnic faculty in Zenica.
                    I found my passion for programming back in high school, and when I started college, I've founded that I would like to pursue a career in web development. Since then, I'm continuously working on my skills for both the back-end and front-end.
                </p>
                <p>
                    I can say that I'm a hardworking person, someone willing to learn new things, and someone who likes to work in a team.
                </p>
                <p>
                    Besides college and programming, I'm also a senior scholar at the BH Futures Foundation. As a member of the foundation, I've got an opportunity to work with some extraordinary people, volunteer in various activities, etc.
                </p>
            </div>
            <div className={classes.aboutMeImage}>
                <div className={classes.aboutMeImageContainer}>

                    <img src={image} alt='Muamer' />
                </div>
            </div>
        </div>
    )
}

export default AboutMe