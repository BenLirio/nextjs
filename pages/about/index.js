import React from 'react'
import Layout from '../../components/Layout/Layout'
import Section from '../../components/Layout/Section'
import Building from '../../components/About/Building'
import Employees from '../../components/About/Employees'
import { Grid, Box, Typography, Fade, Grow } from '@material-ui/core'
import Image from '../../components/shared/Image'
import AboutCard from '../../components/About/AboutCard'
import MissionStatement from '../../components/About/MissionStatement'

const about = () => {
  return (
    <>
      <Grid item xs={12} container spacing={5}>
        <Grid item xs={12}>
          <Box marginTop={5} />
          <Typography variant="h2">About</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box height={400}>
            <Image src="dummy/900x400.png" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <MissionStatement />
        </Grid>
        <Grid item xs={6}>
          <AboutCard name="doctors" />
        </Grid>
        <Grid item xs={6}>
          <AboutCard name="team" />
          <Box marginTop={5} />
        </Grid>
      </Grid>
    </>
  )
}

export default about
