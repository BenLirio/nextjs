import React, { useState } from 'react'
import { Box, Grid, Button, Dialog, DialogTitle } from '@material-ui/core'
import Image from '../../shared/Image'
import Hours from './Hours'

const Banner = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <Hours />
      </Dialog>
      <Box p={2} bgcolor="background.default">
        <Grid container>
          <Grid item xs={1}>
            <Image src="home/favicon.ico" size="contain"></Image>
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpen(true)}
            >
              Hours & location
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Banner
