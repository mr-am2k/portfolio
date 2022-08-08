import classes from './Project.module.css'
import { useNavigate } from 'react-router-dom'

const Project = ({ image, name }) => {
    const navigate = useNavigate();
    const redirect = () => {
        const link = name.replaceAll(' ', '-').toLowerCase();
        navigate('/' + link)
    }
    return (
        <div className={classes.projectContainer}>
            <div className={classes.projectContent}>
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <button onClick={redirect}>More info</button>
            </div>

        </div>

    )
}

export default Project