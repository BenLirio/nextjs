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

const ServicePage = ({ serviceData }) => {
  const router = useRouter()
  const {
    query: { service }
  } = router

  const back = () => {
    router.push('/services/')
  }
  return (
    <>
      <Grid item xs={1}>
        <IconButton onClick={back}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={6} md={7}>
        <Typography variant="h2">{serviceData.name}</Typography>
        <Typography variant="body1">{serviceData.description}</Typography>
        <Divider />
        <Typography variant="h3">{service}</Typography>
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <Grow in={true}>
          <Box bgcolor="background.paper">
            <SideBar name={serviceData.name} items={serviceData.items} />
          </Box>
        </Grow>
      </Grid>
    </>
  )
}

export default ServicePage
