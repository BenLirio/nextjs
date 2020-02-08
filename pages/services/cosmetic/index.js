import {
  Box,
  Divider,
  Grid,
  Typography,
  Slide,
  Grow,
  IconButton
} from '@material-ui/core'
import React, { useState } from 'react'
import SideBar from '../../../components/Services/SideBar'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Link from '../../../components/shared/Link'
import { useRouter } from 'next/router'

const services = [
  'Bonding',
  'Bridges',
  'Dentures',
  'Crowns',
  'Implants',
  'Invisalign',
  'Snap-On-Smile',
  'Veneers',
  'Whitening'
]

const index = () => {
  const {
    query: { service }
  } = useRouter()
  return (
    <Grow in={true}>
      <Grid container spacing={5}>
        <Grid item md={1}>
          <IconButton component={Link} href="/services/">
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={7} md={7}>
          <Typography variant="h2">Cosmetic</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            asperiores blanditiis architecto magni molestias sed iusto sunt
            veniam vel eaque in modi, dolores inventore dolore, nobis expedita,
            harum qui eius!
          </Typography>
          <Divider />
          <Typography variant="h3">{service}</Typography>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Box bgcolor="background.paper">
            <SideBar name="Cosmetic" services={services} />
          </Box>
        </Grid>
      </Grid>
    </Grow>
  )
}

export default index
