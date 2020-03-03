import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
  CardContent
} from '@material-ui/core'
import React from 'react'
import GoogleMap from './GoogleMap'

const MapRow = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">How to reach us</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Call: 616-281-8338</Typography>
        <CardContent>
          <Typography variant="body1">
            We know your time is valuable so at Healthy Smile, we offer
            convenient office hours such as late evenings and even select
            Fridays
          </Typography>
        </CardContent>

        <Button color="secondary">Contact</Button>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardMedia>
            <GoogleMap />
          </CardMedia>
        </Card>
      </Grid>
    </>
  )
}

export default MapRow
