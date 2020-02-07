import React from 'react'
import {
  Card,
  CardContent,
  Icon,
  CardActionArea,
  Button,
  CardActions,
  Typography
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import RestoreIcon from '@material-ui/icons/Restore'
import AssignmentIcon from '@material-ui/icons/Assignment'

const Feature = ({ label }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="body1" color="textSecondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          rem?
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">Learn more</Button>
      </CardActions>
    </Card>
  )
}

export default Feature
