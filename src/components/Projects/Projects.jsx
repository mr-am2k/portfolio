import classes from './Projects.module.css'
import Project from './Project/Project'
import { data } from '../../assets/projects/data'
const Projects = () => {
    return (
        <div className={classes.projectsContainer}>
            <h1>Projects</h1>
            <div className={classes.projectContainer}>
                {data.map((element, index) => (
                    <div key={index} className={classes.item}>
                        <Project image={element.image} name={element.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects