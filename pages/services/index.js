import { makeStyles, Typography, Grid, Box } from '@material-ui/core'
import React, { useRef } from 'react'
import ServiceCta from '../../components/Services/ServiceCta'
import ServiceFeature from '../../components/Services/ServiceFeature'
import CommonService from '../../components/Services/CommonService'
import BeforeAndAfter from '../../components/Services/BeforeAndAfter'
import ServiceList from '../../components/Services/ServiceList'
import ServiceDescription from '../../components/Services/ServiceDescription'
import ServiceImage from '../../components/Services/ServiceImage'

const index = () => {
  const myRef = useRef(null)
  return (
    <>
      <Grid item xs={7}>
        <ServiceImage />
      </Grid>
      <Grid item xs={5}>
        <CommonService myRef={myRef} />
      </Grid>
      <Grid item xs={12}>
        <Box m={1} />
      </Grid>
      <Grid item xs={4}>
        <ServiceFeature age="young" />
      </Grid>
      <Grid item xs={4}>
        <ServiceFeature age="mid" />
      </Grid>
      <Grid item xs={4}>
        <ServiceFeature age="old" />
      </Grid>
      <Grid item xs={12}>
        <ServiceCta />
      </Grid>
      <Grid item xs={12}>
        <Typography ref={myRef} variant="h3">
          A-Z Services
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <ServiceList myRef={myRef} />
      </Grid>
      <Grid item xs={8}>
        <ServiceDescription />
      </Grid>
    </>
  )
}

export default index
