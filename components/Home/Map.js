import React from 'react'
import {
  Box,
  Typography,
  makeStyles,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  CardMedia,
  IconButton
} from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room'
import LaunchIcon from '@material-ui/icons/Launch'

const url =
  'https://www.google.com/maps/place/Healthy+Smile/@42.8841715,-85.6181821,17z/data=!3m1!4b1!4m5!3m4!1s0x8819b33bb23f06eb:0xabd27863ad69cc5a!8m2!3d42.8841676!4d-85.6159934'
const width = 700
const height = 500
const zoom = 11
const key = 'AIzaSyA2A1xc8sr0OQpnDuwyj0kv4LCSw7jMMlA'
const center = '42.8841725,-85.6159679'
const useStyles = makeStyles(theme => ({
  root: {
    background: `url("https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${width}x${height}&key=${key}")`,
    // background: `url("https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${width}x${height}&key=${key}&markers=|${center}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: 400,
    backgroundRepeat: 'no-repeat'
  },
  marker: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    transform: 'translateY(-50%)'
  },
  mapBorder: {
    borderRadius: theme.shape.medium.borderRadius,
    width: '100%',
    height: '100%'
  }
}))

const LaunchButton = () => {
  return (
    <IconButton component="a" href={url} target="_blank">
      <LaunchIcon />
    </IconButton>
  )
}

const Map = () => {
  const classes = useStyles()
  return (
    <Card className={classes.mapBorder} variant="outlined">
      <CardHeader title="Where to find us" action={<LaunchButton />} />
      <CardMedia>
        <div className={classes.root}>
          <div className={classes.marker}>
            <RoomIcon
              className={classes.icon}
              fontSize="large"
              color="primary"
            />
          </div>
        </div>
      </CardMedia>
    </Card>
  )
}

export default Map
