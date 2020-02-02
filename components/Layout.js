import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    minHeight: '100vh',
    background: theme.palette.background.default,
    gridTemplateColumns: theme.grid.template.columns,
    justifyContent: 'start',
    gridRowGap: '2rem'
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <div className={classes.root}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
