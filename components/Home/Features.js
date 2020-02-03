import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: theme.sizes.responsive[3],
    [theme.breakpoints.up('md')]: {
      height: theme.sizes.static[3]
    },
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2vw'
  },
  feature: {
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1]
  }
}))

const Features = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.feature}></div>
      <div className={classes.feature}></div>
      <div className={classes.feature}></div>
    </div>
  )
}

export default Features
