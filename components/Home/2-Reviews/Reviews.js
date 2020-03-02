import { Grid, Box } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import ReviewsContext from '../../shared/context/ReviewsContext'
import Heading from './Heading'
import Review from './Review'

const Reviews = () => {
  const reviews = useContext(ReviewsContext)
  const [currentReviews, setCurrentReviews] = useState([0, 1, 2])
  return (
    <>
      <Heading />
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
