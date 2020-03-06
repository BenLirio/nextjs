import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import React from 'react'
import { useRouter } from 'next/router'
import Feature from './Feature'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.medium.borderRadius
  },
  media: {
    height: theme.spacing(20)
  }
}))

const Features = () => {
  const classes = useStyles()
  const router = useRouter()
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">How we help you</Typography>
      </Grid>
      <Grid item xs={4}>
        <Feature type="family" />
      </Grid>
      <Grid item xs={4}>
        <Feature type="cosmetic" />
      </Grid>
      <Grid item xs={4}>
        <Feature type="hospital" />
      </Grid>
    </>
  )
}

export default Features
