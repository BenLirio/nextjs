import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography
} from '@material-ui/core'
import React from 'react'
import GoogleMap from './GoogleMap'

const MapRow = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">Where to reach us</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Call: 616-281-8338</Typography>

        <Typography variant="body1">
          CONTACT DETAILS(~25w) Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit odit, obcaecati sunt eos, quae eveniet,
          excepturi enim culpa incidunt maiores officiis veniam quo pariatur
          delectus!
        </Typography>

        <Button color="secondary">CTA BUTTON</Button>
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
