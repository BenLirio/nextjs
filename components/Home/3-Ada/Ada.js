import React from 'react'

import { Grid, Box, makeStyles } from '@material-ui/core'
import Image from '../../shared/Image'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  ada: {
    width: '100%',
    margin: 'auto',
    height: 100
  }
}))

const Ada = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} sm={6} className={classes.ada}>
        <Image src="home/ada.png" size="contain" />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ada}>
        <Image src="home/mda.png" size="contain" />
      </Grid>
    </Grid>
  )
}

export default Ada
