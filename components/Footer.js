import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    height: 400
  }
}))

const Footer = () => {
  const classes = useStyles()
  return <div className={classes.root}></div>
}

export default Footer
