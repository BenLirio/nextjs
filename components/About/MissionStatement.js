import React from 'react'
import { Typography, Grid, Box } from '@material-ui/core'

const MissionStatement = () => {
  return (
    <>
      <Grid item xs={8}>
        <Typography variant="h3">About us</Typography>
        <Typography variant="body1">
          We believe each person should experience dentistry as fun and as a
          treat in a completely relaxed setting. We constantly strive to be
          outstanding because we believe in making the world a better place for
          ourselves and the people we serve. We go to work everyday so that we
          can give each other and the people we care for something to smile
          about.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box height={400} bgcolor="info.dark" />
      </Grid>
    </>
  )
}

export default MissionStatement
