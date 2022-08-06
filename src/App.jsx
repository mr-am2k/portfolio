import { Fragment } from 'react'
import { Navbar, HomePage, AboutMe } from './components/index'
import classes from './App.module.css'
const App = () => {
  return (
    <Fragment>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.container}>
        <HomePage />
        <AboutMe />
      </div>
    </Fragment>
  )
}

export default App