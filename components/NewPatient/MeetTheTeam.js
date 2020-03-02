import React from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardMedia
} from '@material-ui/core'

const MeetTheTeam = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="Meet the team" />
      <CardMedia image="/home/16_9.svg" style={{ height: '200px' }} />
      <CardActions>
        <Button variant="text">View More</Button>
      </CardActions>
    </Card>
  )
}

export default MeetTheTeam
