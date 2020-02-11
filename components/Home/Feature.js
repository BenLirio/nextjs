import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import React from 'react'
import Link from '../shared/Link'

const Feature = ({ label, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" href="/services" component={Link} naked>
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}

export default Feature
