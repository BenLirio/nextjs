import { Card, CardContent, Typography, CardHeader } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'
import moment from 'moment'

const Review = ({ review }) => {
  console.log('review', review)
  return (
    <Card>
      <CardHeader
        title={review.title}
        subheader={
          <>
            <Rating
              readOnly
              name={review.id.toString()}
              value={review.rating}
            />
            <Typography>{moment(review.created).fromNow()}</Typography>
          </>
        }
      />
      <CardContent>
        <Typography color="textSecondary">{review.text}</Typography>
      </CardContent>
      <CardContent>
        <Typography>- {review.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default Review
