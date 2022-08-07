import Skill from './Skill/Skill'
import classes from './Skills.module.css'
import data from '../../assets/skills/data.json'

const Skills = () => {
    return (
        <div id='skills' className={classes.skillsContainer}>
            <h1>Skills</h1>
            <div className={classes.skillContainer}>
                {
                    data.map((element, index) => (
                        <div key={index} className={classes.item}>
                            <Skill image={element.url} name={element.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills