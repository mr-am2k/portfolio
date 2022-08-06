import classes from './HomePage.module.css';
const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <h4>Let's work together</h4>
            <hr />
            <h1>Hello there,👋 I'm <span>Muamer</span> </h1>
            <h1>Software engineering student and </h1>
            <h1>Web developer</h1>
            <p>I'm software engineering student passionate about web development.
                Currently I'm working on some personal projects to improve my knowledge about both, front-end and back-end.
            </p>
        </div>
    )
}

export default HomePage