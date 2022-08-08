import { Fragment } from 'react'
import { Navbar, HomePage, AboutMe, Skills, Projects, SingleProject } from './components/index'
import { Routes, Route } from "react-router-dom";
import classes from './App.module.css'

const Home = () => (
  <>
    <HomePage />
    <AboutMe />
    <Skills />
    <Projects />
  </>
)
const App = () => {
  return (
    <Fragment>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:projectName' element={<SingleProject />} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App