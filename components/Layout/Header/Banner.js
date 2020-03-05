import React, { useState } from 'react'
import {
  Box,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  makeStyles,
  Typography
} from '@material-ui/core'
import Image from '../../shared/Image'
import Hours from './Hours'

const useStyles = makeStyles(theme => ({
  logo: {
    background: "url('/home/favicon.ico')",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: 100,
    height: 100,
    top: -20,
    left: 0,
    position: 'absolute'
  }
}))

const Banner = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <>
      <Box bgcolor="background.default">
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <Box height={70} p={1}>
              <Image src="/home/crop_logo.svg" size="contain" />
            </Box>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" color="textSecondary" align="center">
              At Healthy Smile we are a family
            </Typography>
          </Grid>
          <Grid item>
            <Box p={1}>
              <Button color="secondary">Call today</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Banner
