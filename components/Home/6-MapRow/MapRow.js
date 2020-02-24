import React from 'react'
import {
  Grid,
  Box,
  Card,
  CardMedia,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core'
import Map from '../Map'
import GoogleMap from './GoogleMap'

const useStyles = makeStyles(theme => ({
  map: {
    borderRadius: theme.shape.medium.borderRadius
  }
}))

const MapRow = () => {
  const classes = useStyles()
  return (
    <Grid item xs={12} container justify="center">
      <Grid item xs={12}>
        <Typography variant="h3">How to reach us</Typography>
        <Box margin={3} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Call: 616-281-8338</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum
          molestias quo libero obcaecati repellendus ea eius veniam numquam
          nisi.
        </Typography>
        <Button variant="contained" color="secondary">
          CTA BUTTON
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Card variant="outlined" className={classes.map}>
          <CardMedia>
            <GoogleMap />
          </CardMedia>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MapRow