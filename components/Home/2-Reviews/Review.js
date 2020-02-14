import React from 'react'
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  makeStyles
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.medium.borderRadius
  }
}))

const Review = ({ review }) => {
  const classes = useStyles()
  console.log(review)
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h5">{review.title}</Typography>
        <Rating value={review.rating} />
        <Typography color="textSecondary">{review.text}</Typography>
        <Typography>- {review.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default Review
