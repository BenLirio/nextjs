import React, { useState } from 'react'
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  makeStyles,
  CardHeader,
  CardContent,
  Box,
  Hidden,
  Switch,
  Fade,
  CardActionArea
} from '@material-ui/core'
import ServiceList from '../ServiceList'
import ServiceCard from './ServiceCard'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.medium.borderRadius
  },
  media: {
    height: theme.spacing(20)
  }
}))

const NewSmile = () => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h3">How we help you</Typography>
      <Box margin={5} />
      <Grid item xs={12} container spacing={5}>
        <Grid item xs={4}>
          <ServiceCard title="Cosmetic" image="/home/before_after.jpg" />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard title="Preventative" image="/home/tooth_brush.jpg" />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard title="Other" image="/home/xray.jpeg" />
        </Grid>
      </Grid>
    </>
  )
}

export default NewSmile
