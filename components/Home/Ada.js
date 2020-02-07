import React from 'react'
import Image from '../shared/Image'
import { Grid, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  ada: {
    width: '100%',
    margin: 'auto'
  }
}))

const Ada = () => {
  const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.root} spacing={2}>
      <Grid item xs={6} className={classes.ada}>
        <Image src="home/ada.png" size="contain" />
      </Grid>
      <Grid item xs={6} className={classes.ada}>
        <Image src="home/mda.png" size="contain" />
      </Grid>
    </Grid>
  )
}

export default Ada
