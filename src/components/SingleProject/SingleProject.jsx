/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classes from './SingleProject.module.css'
import { data } from '../../assets/projects/data'

const SingleProject = () => {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const [project, setProject] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const goBack = () => {
      navigate('/')
  }
  useEffect(() => {
    data.forEach(element => {
      if (element.name.replaceAll(' ', '-').toLowerCase() === projectName) {
        setProject(element)
        setIsLoading(false)
        return;
      }
    })
  }, [projectName])
  return (
    <>
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <div className={classes.singleProjectContainer}>
          <div className={classes.singleProjectImage}>
            <img src={project.image} alt='slika' />
            <div className={classes.singleProjectImageOverlay}>
              <h3>{project.name}</h3>
              <h4>{project.technologies[0]}</h4>
            </div>
          </div>
          <div className={classes.singleProjectContent}>
            <div className={classes.singleProjectDescription}>
              <h1>Description</h1>
              <p>{project.overview}</p>
              <a href={project.githubLink} target='_blank'><button>Github</button></a>
              <a href={project.websiteLink} target='_blank'><button>Demo</button></a>
            </div>
            <div className={classes.singleProjectTechnologies}>
              <h1>Technologies</h1>
              <div className={classes.singleProjectTechnologiesList}>
                <ul>
                  {project.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={classes.singleProjectBack}>
              <button onClick={goBack}>Back</button>
            </div>
          </div>
        </div>
      )}
    </>

  )
}

export default SingleProject