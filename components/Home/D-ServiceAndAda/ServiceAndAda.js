import React from 'react'
import { Hidden, Grid, Box } from '@material-ui/core'
import ServiceList from '../ServiceList'
import Ada from '../Ada'

const ServiceAndAda = () => {
  return (
    <Hidden smDown>
      <Grid item md={6} lg={7}>
        <Box>
          <ServiceList />
        </Box>
      </Grid>
      {/* ADA  */}
      <Grid item md={6} lg={5}>
        <Box height={300}>
          <Ada />
        </Box>
      </Grid>
    </Hidden>
  )
}

export default ServiceAndAda
