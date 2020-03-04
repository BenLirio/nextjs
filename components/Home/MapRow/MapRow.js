import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  CardActions
} from '@material-ui/core'
import React from 'react'
import GoogleMap from './GoogleMap'
import hours from '../../../js/about/hours'

const MapRow = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">How to reach us</Typography>
      </Grid>
      <Grid item xs={6}>
        <CardContent>
          <Typography variant="body1">
            We know your time is valuable so at Healthy Smile, we offer
            convenient office hours such as late evenings and even select
            Fridays.
          </Typography>
        </CardContent>
        <CardContent>
          {hours.map(({ name, hours }) => {
            return (
              <Typography>
                {name}: {hours}
              </Typography>
            )
          })}
        </CardContent>
        <CardActions>
          <Button color="secondary">Contact</Button>
        </CardActions>
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
