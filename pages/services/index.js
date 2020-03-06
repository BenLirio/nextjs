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
      <Grid item xs={4}>
        <ServiceFeature service="family" />
      </Grid>
      <Grid item xs={4}>
        <ServiceFeature service="cosmetic" />
      </Grid>
      <Grid item xs={4}>
        <ServiceFeature service="hospital" />
      </Grid>
      <Grid item xs={12}>
        <ServiceCta />
      </Grid>
    </>
  )
}

export default index
