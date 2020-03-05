import { Grid, Box, IconButton } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import ReviewsContext from '../../shared/context/ReviewsContext'
import Heading from './Heading'
import Review from './Review'
import Percent from './Percent'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const REVIEWS_PER_PAGE = 3

const Reviews = () => {
  const reviews = useContext(ReviewsContext)
  const [currentPage, setCurrentPage] = useState(0)
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <>
      <Grid item xs={12}>
        <Heading />
      </Grid>
      <Grid item xs={12} container alignItems="center">
        <Grid item>
          <IconButton disabled={currentPage === 0} onClick={prevPage}>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
          <Review review={reviews[currentPage * 3 + 0]} />
        </Grid>
        <Grid item>
          <Box p={1} />
        </Grid>
        <Grid item xs>
          <Review review={reviews[currentPage * 3 + 1]} />
        </Grid>
        <Grid item>
          <Box p={1} />
        </Grid>
        <Grid item xs>
          <Review review={reviews[currentPage * 3 + 2]} />
        </Grid>
        <Grid item>
          <IconButton onClick={nextPage}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Percent />
      </Grid>
    </>
  )
}

export default Reviews
