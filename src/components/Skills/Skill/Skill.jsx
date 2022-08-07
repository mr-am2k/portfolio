import classes from './Skill.module.css'

const Skill = (props) => {

  return (
    <div className={classes.skillContainer}>
        <img src={props.image} alt='logo'/>
        <h3>{props.name}</h3>
    </div>
  )
}

export default Skill