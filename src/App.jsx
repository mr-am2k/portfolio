import { Fragment } from 'react'
import { Navbar, HomePage } from './components/index'
import classes from './App.module.css'
const App = () => {
  return (
    <Fragment>
      <div className={classes.navbar}>

      <Navbar />
      </div>
      <div className={classes.container}>
        <HomePage />
        <p>HE</p>
      </div>
    </Fragment>
  )
}

export default App