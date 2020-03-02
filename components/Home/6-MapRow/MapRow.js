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
    <Grid item xs={12} container justify="center" spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h3">Where to reach us</Typography>
        <Box margin={3} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Call: 616-281-8338</Typography>
        <Box m={3} />
        <Typography variant="body1">
          CONTACT DETAILS(~25w) Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit odit, obcaecati sunt eos, quae eveniet,
          excepturi enim culpa incidunt maiores officiis veniam quo pariatur
          delectus!
        </Typography>
        <Box m={3} />
        <Button color="secondary">CTA BUTTON</Button>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardMedia>
            <GoogleMap />
          </CardMedia>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MapRow
