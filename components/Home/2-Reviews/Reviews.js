import { Grid, Link, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import Review from './Review'
import StatsContext from '../../shared/context/StatsContext'
import { Rating } from '@material-ui/lab'
import ReviewsContext from '../../shared/context/ReviewsContext'

const Reviews = () => {
  const stats = useContext(StatsContext)
  const reviews = useContext(ReviewsContext)
  const [currentReviews, setCurrentReviews] = useState([0, 1, 2])
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">
          What{' '}
          <Link href="https://google.com" target="_blank">
            {stats.count}
          </Link>{' '}
          others are saying
        </Typography>
        <Rating value={stats.rating} />
        <Typography color="textSecondary">
          {stats.percent}% would recommend
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Verified Reviews from{' '}
          <Link href="https://google.com" target="_blank">
            RateABiz
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Review review={reviews[0]} />
      </Grid>
      <Grid item xs={4}>
        <Review review={reviews[1]} />
      </Grid>
      <Grid item xs={4}>
        <Review review={reviews[2]} />
      </Grid>
    </>
  )
}

export default Reviews
