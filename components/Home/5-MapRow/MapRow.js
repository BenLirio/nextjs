import React from 'react'
import { Grid, Box } from '@material-ui/core'
import Map from '../Map'

const MapRow = () => {
  return (
    <Grid item xs={12} container justify="center">
      <Grid item xs={12} md={8}>
        <Box>
          <Map />
        </Box>
      </Grid>
    </Grid>
  )
}

export default MapRow
