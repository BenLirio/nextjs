import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  CardActions,
  CardHeader,
  Link
} from '@material-ui/core'
import React from 'react'
import GoogleMap from './GoogleMap'
import hours from '../../../js/about/hours'
import { useContext } from 'react'
import DialogContext from '../../Dialogs/dialog-context'

const MapRow = () => {
  const setOpen = useContext(DialogContext)[1]
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">How to reach us</Typography>
      </Grid>
      <Grid item xs={6}>
        <CardContent>
          <Typography variant="body1">
            We value your time at Healthy Smile, offering convenient office
            hours such as late evenings and select Fridays. Please contact us
            with any questions or to schedule an appointment.
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
          <Button onClick={() => setOpen(true)} color="secondary">
            Contact
          </Button>
        </CardActions>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader
            title={
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/Healthy+Smile/@42.8841715,-85.6181821,17z/data=!3m1!4b1!4m5!3m4!1s0x8819b33bb23f06eb:0xabd27863ad69cc5a!8m2!3d42.8841676!4d-85.6159934?hl=en"
              >
                2021 44th St SE, Grand Rapids, MI 49508
              </Link>
            }
          />
          <CardMedia>
            <GoogleMap />
          </CardMedia>
        </Card>
      </Grid>
    </>
  )
}

export default MapRow
