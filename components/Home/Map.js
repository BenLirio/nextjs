import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.info.dark,
    width: '100%',
    height: '100%',
    padding: '1rem'
  },
  map: {
    background: 'url("/map.png")',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}))

const Map = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.map}>map</div>
    </div>
  )
}

export default Map
