import { makeStyles, Typography, Grid, Box } from '@material-ui/core'
import React from 'react'
import ServiceCta from '../../components/Services/ServiceCta'
import ServiceFeature from '../../components/Services/ServiceFeature'
import CommonService from '../../components/Services/CommonService'
import BeforeAndAfter from '../../components/Services/BeforeAndAfter'
import ServiceList from '../../components/Services/ServiceList'

const index = () => {
  return (
    <>
      <Grid item xs={7}>
        <BeforeAndAfter />
      </Grid>
      <Grid item xs={5}>
        <CommonService />
      </Grid>
      <Grid item xs={12}>
        <ServiceCta />
      </Grid>
      <Grid item xs={4}>
        <ServiceFeature />
      </Grid>
      <Grid item xs={4}>
        <ServiceFeature />
      </Grid>
      <Grid item xs={4}>
        <ServiceFeature />
      </Grid>
      <Grid item xs={4}>
        <ServiceList />
      </Grid>
      <Grid item xs={8}>
        <Box bgcolor="info.dark" height={300}></Box>
      </Grid>
    </>
  )
}

export default index
