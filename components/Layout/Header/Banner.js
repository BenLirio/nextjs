import React, { useState } from 'react'
import {
  Box,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  makeStyles
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
      <Dialog onClose={() => setOpen(false)} open={open}>
        <Hours />
      </Dialog>
      <Box p={2} height={80} bgcolor="background.default">
        <Grid container align="right">
          <Grid item xs={1}>
            <div className={classes.logo}></div>
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpen(true)}
            >
              Hours & location
            </Button> */}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Banner
