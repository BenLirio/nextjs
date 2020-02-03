//https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json
import React from 'react'
import {
  makeStyles,
  Typography,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    ...theme.grid.template.columns
  },
  card: {
    gridColumn: 'center-start / center-end'
  }
}))

const RateABiz = ({ reviews }) => {
  const classes = useStyles()
  const review = reviews[0]
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary">
            {review.authorFirstName}
          </Typography>
          <Typography variant="h5">{review.title}</Typography>
          <Rating name="read-only" value={review.rating} readOnly />
          <Typography variant="body1">{review.text}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}
RateABiz.getInitialProps = async function() {
  console.log('test')
}

export default RateABiz
