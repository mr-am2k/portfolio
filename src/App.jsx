import { Fragment } from 'react'
import { Navbar, HomePage, AboutMe, Skills, Projects, SingleProject, Footer } from './components/index'
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
    <div className={classes.wrapper}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:projectName' element={<SingleProject />} />
        </Routes>
      </div>
      <div className={classes.footer}>

        <Footer />
      </div>
    </div>
  )
}

export default App