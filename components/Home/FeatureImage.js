import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url("/feature_image.jpg")',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}))

const FeatureImage = () => {
  const classes = useStyles()
  return <img className={classes.root}></img>
}

export default FeatureImage
