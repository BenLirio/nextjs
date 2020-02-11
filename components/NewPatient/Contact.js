import React from 'react'
import {
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  Button
} from '@material-ui/core'

const Contact = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="Further questions?" subheader="Feel free to call" />
      <CardActions>
        <Button color="secondary" variant="contained">
          616-281-8338
        </Button>
      </CardActions>
    </Card>
  )
}

export default Contact
