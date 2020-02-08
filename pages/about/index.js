import React from 'react'
import Layout from '../../components/Layout/Layout'
import Section from '../../components/Layout/Section'
import Building from '../../components/About/Building'
import Employees from '../../components/About/Employees'
import { Grid, Box, Typography, Fade, Grow } from '@material-ui/core'
import Image from '../../components/shared/Image'
import AboutCard from '../../components/About/AboutCard'

const about = () => {
  return (
    <Fade in={true}>
      <Grid container justify="center" spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h2">About</Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Box height={400}>
            <Image src="dummy/900x400.png" />
          </Box>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} sm={5} md={4}>
          <AboutCard name="doctors" />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <AboutCard name="team" />
        </Grid>
      </Grid>
    </Fade>
  )
}

export default about
