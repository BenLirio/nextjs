import React from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  Typography,
  CardMedia
} from '@material-ui/core'

const ServiceFeature = () => {
  return (
    <Card>
      <CardHeader title="Service" />
      <CardMedia image="/home/16_9.svg" style={{ height: '200px' }} />
      <CardContent>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, ab!
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">Learn more</Button>
      </CardActions>
    </Card>
  )
}

export default ServiceFeature
