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
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card} variant="outlined">
            <CardHeader title="before & after" />
            <CardMedia
              image={`/home/${true ? 'before' : 'after'}.jpg`}
              className={classes.media}
            />
            <CardMedia
              image={`/home/${true ? 'after' : 'before'}.jpg`}
              className={classes.media}
            />
          </Card>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={12} sm={8}>
            <ServiceList />
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}

export default NewSmile
