import { Grid, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Image from '../../shared/Image'

const useStyles = makeStyles(theme => ({
  image: {
    // background: 'url("/home/brush_teeth.jpg")',
    background: '#444',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))

const NUM_IMAGES = 5

const Desktop = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item xs={12}>
        <div className={classes.image} variant="outlined">
          <Image src="/home/feature/feature_2.jpeg"></Image>
        </div>
      </Grid>
    </>
  )
}

export default Desktop
