import React from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core'

const BeforeAndAfter = () => {
  return (
    <Card>
      <CardHeader title="Before & After" />
      <CardMedia image="/home/16_9.svg" style={{ height: '300px' }} />
      <CardContent>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          odit consequatur quod necessitatibus sed, eveniet earum dolor
          doloribus dolores blanditiis.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">Previous</Button>
        <div style={{ flex: '1' }}></div>
        <Button variant="text">Next</Button>
      </CardActions>
    </Card>
  )
}

export default BeforeAndAfter
