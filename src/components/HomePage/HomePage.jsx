import classes from './HomePage.module.css';
const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <div className={classes.homePageContent}>
                <h3>Hello there, 👋 I'm</h3>
                <h1>Muamer <br /> Alickovic</h1>
                <h2>Software engineering student  and Web developer</h2>
                <a href='../../assets/muamercv.pdf' download="Muamer's resume">
                    <button type='button'>Download Resume</button>
                </a>
            </div>
            <div className={classes.homePageImage}></div>

        </div>
    )
}

export default HomePage