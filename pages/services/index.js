import { makeStyles, Typography, Grid, Box } from '@material-ui/core'
import React from 'react'
import ServiceCta from '../../components/Services/ServiceCta'
import ServiceFeature from '../../components/Services/ServiceFeature'
import CommonService from '../../components/Services/CommonService'

const useStyles = makeStyles(theme => ({}))

const index = () => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12} container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h2">Services</Typography>
        </Grid>
        <Grid item xs={7}>
          <Box bgcolor="info.dark" height={300}>
            Before & after
          </Box>
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
        <Grid item xs={8}>
          Service List
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor="info.dark" height={300}></Box>
        </Grid>
      </Grid>
    </>
  )
}

export default index
