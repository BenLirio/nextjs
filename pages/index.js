import React from 'react'
import Layout from '../components/Layout/Layout'
import { makeStyles, Grid, Box, Container, Hidden } from '@material-ui/core'
import clsx from 'clsx'
import FeatureImage from '../components/Home/FeatureImage'
import Features from '../components/Home/Features'
import RateABiz from '../components/Home/RateABiz'
import fetch from 'isomorphic-unfetch'
import rating_local from '../data/rating_local'
import About from '../components/Home/About'
import Cta from '../components/Home/Cta'
import Map from '../components/Home/Map'
import Section from '../components/Layout/Section'
import MobileFeatures from '../components/Home/Mobile/MobileFeatures'
import MobileRateABiz from '../components/Home/Mobile/MobileRateABiz/MobileRateABiz'
import MobileAbout from '../components/Home/Mobile/MobileAbout'
import Image from '../components/Image'
import filterStats from '../data/filter_stats'
import filterReviews from '../data/filter_reviews'

const API_URL =
  'https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json'

export default function Index({ reviews, stats }) {
  console.log('reviews', reviews)
  console.log('stats', stats)
  return (
    <Layout>
      <Box height="60vh" bgcolor="primary.main">
        <FeatureImage />
      </Box>

      <Hidden smUp>
        <Grid item xs={12} sm={4} md={3}>
          {/* Feature List Mobile */}
          <Box>
            <MobileFeatures />
          </Box>
        </Grid>
      </Hidden>

      <Container>
        <Grid container spacing={5}>
          <Hidden xsDown>
            {/* FEATURES ROW */}
            <Grid container item xs={12} direction="row" justify="center">
              <Grid item xs={12} sm={4} md={3}>
                {/* Feature 1 */}
                <Box height={60} bgcolor="secondary.dark" />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                {/* Feature 2 */}
                <Box height={60} bgcolor="primary.main" />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                {/* Feature 3 */}
                <Box height={60} bgcolor="secondary.dark" />
              </Grid>
            </Grid>
          </Hidden>

          {/* REVIEWS AND ADA */}
          <Hidden smDown>
            <Grid item xs={12} md={4}>
              {/* ADA  */}
              <Box height={300} bgcolor="primary.light" />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={8}>
            {/* Reviews */}
            <Box>
              {/* <MobileRateABiz stats={stats} reviews={reviews} /> */}
            </Box>
          </Grid>

          {/* ABOUT HEALTHY SMILE */}
          <Grid item xs={12} sm={8}>
            {/* About text */}
            <Box>
              <MobileAbout />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* Image */}
            <Box height={300} bgcolor="success.dark">
              <Image src="building.jpg" />
            </Box>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={12} md={6}>
              {/* About the Doctors */}
              <Box height={300} bgcolor="info.main" />
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item md={6}>
              {/* About image */}
              <Box height={300} bgcolor="info.light" />
            </Grid>
          </Hidden>

          {/* CALL TO ACTION */}
          <Grid item xs={12}>
            {/* Call to action */}
            <Box>
              <Cta />
            </Box>
          </Grid>
          {/* MAP TO OFFICE */}
          <Grid item xs={12}>
            <Box height={300} bgcolor="primary.main">
              <Image src="map.png" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

// Index.getInitialProps = async function() {
//   const res = await fetch(API_URL)
//   const data = await res.json()
//   const stats = filterStats(data.stats)
//   const reviews = filterReviews(data.reviews)
//   return {
//     reviews,
//     stats
//   }
// }
