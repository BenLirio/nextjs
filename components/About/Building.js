import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  buildingImage: {
    background: 'url("/building.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: theme.sizes.static[4]
  }
}))

const Building = () => {
  const classes = useStyles()
  return <div className={classes.buildingImage}></div>
}

export default Building
