import {
  Grid,
  makeStyles,
  Box,
  Divider,
  Typography,
  Hidden
} from '@material-ui/core'
import React, { createContext } from 'react'
import FeatureImage from '../components/Home/1-FeatureImage/FeatureImage'
import Reviews from '../components/Home/2-Reviews/Reviews'
import ServiceAndAda from '../components/Home/D-ServiceAndAda/ServiceAndAda'
import CtaRow from '../components/Home/5-CtaRow/CtaRow'
import MapRow from '../components/Home/6-MapRow/MapRow'
import data from '../js/RateABiz/data.json'
import filterReviews from '../js/RateABiz/filter_reviews'
import filterStats from '../js/RateABiz/filter_stats'
import { ReviewsContextProvider } from '../components/shared/context/ReviewsContext'
import { StatsContextProvider } from '../components/shared/context/StatsContext'
import NewSmile from '../components/Home/4-NewSmile/NewSmile'
import Ada from '../components/Home/3-Ada/Ada'

export default function Index({ reviews, stats }) {
  return (
    <>
      <Box margin={3} />
      <Grid item xs={12}>
        <Typography variant="h2">Family & Cosmetic Dentistry</Typography>
      </Grid>
      <Box margin={3} />

      <ReviewsContextProvider reviews={reviews}>
        <StatsContextProvider stats={stats}>
          <Reviews stats={stats} reviews={reviews} />
        </StatsContextProvider>
      </ReviewsContextProvider>

      <Box margin={5} />

      <Grid item xs={12} container>
        <Ada />
      </Grid>
      <Box margin={5} />

      <Grid item xs={12} container>
        <NewSmile />
      </Grid>
      <Hidden xsDown>
        <Box margin={5} />
        <Grid item xs={12} container>
          <CtaRow />
        </Grid>
      </Hidden>
      <Box margin={5} />
      <Grid item xs={12} container>
        <MapRow />
      </Grid>
      <Box margin={5} />
    </>
  )
}

// Runs before anything else in the happens
// Kind of a problem because the first page paint
// happens after the page loads
Index.getInitialProps = async function() {
  // const res = await fetch(API_URL)
  // const data = await res.json()
  const stats = filterStats(data.stats)
  const reviews = filterReviews(data.reviews)
  return {
    reviews,
    stats
  }
}
