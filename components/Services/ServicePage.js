import {
  Box,
  Divider,
  Grid,
  Grow,
  IconButton,
  Typography,
  Slide,
  Zoom,
  Fade
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import SideBar from './SideBar'
import Description from './Description'

const ServicePage = ({ serviceData }) => {
  const router = useRouter()
  const { query } = router
  const service = serviceData.items.find(s => s.name == query.service)
  const back = () => {
    router.push('/services/')
  }
  return (
    <>
      <Grid item xs={12}>
        <Box marginTop={5} />
      </Grid>

      <Grid item xs={12} container>
        <Grid item xs={1}>
          <IconButton onClick={back}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item xs={11}>
          <Grid item xs={12}>
            <Typography variant="h2">{serviceData.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {serviceData.description}
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12} container>
            <Grid item xs={3}>
              <Box bgcolor="background.paper">
                <SideBar name={serviceData.name} items={serviceData.items} />
              </Box>
            </Grid>
            <Grid item xs={9} container justify="center">
              <Grid item xs={8}>
                <Box marginTop={3} />
                <Description {...service} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box marginTop={5} />
      </Grid>
    </>
  )
}

export default ServicePage
