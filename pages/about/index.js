import { Box, Grid } from '@material-ui/core'
import React from 'react'
import AboutDoctors from '../../components/About/AboutDoctors'
import AboutTeam from '../../components/About/AboutTeam'
import MissionStatement from '../../components/About/MissionStatement'
import Image from '../../components/shared/Image'

const about = () => {
  return (
    <>
      <Grid item xs={4}>
        <Box height={400} bgcolor="info.dark">
          <Image src="/about/arch.jpg" />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box height={400}>
          <Image src="/about/hattie_and_ona.jpg" />
        </Box>
      </Grid>
      <MissionStatement />
      <AboutDoctors />
      <AboutTeam />
    </>
  )
}

export default about
