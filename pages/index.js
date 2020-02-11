import {
  Box,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  Fade
} from '@material-ui/core'
import React from 'react'
import Cta from '../components/Home/Cta'
import FeatureImage from '../components/Home/FeatureImage'
import MobileAbout from '../components/Home/Mobile/About'
import MobileFeatures from '../components/Home/Mobile/Features/Features'
import Layout from '../components/Layout/Layout'
import Image from '../components/shared/Image'
import { API_URL } from '../js/config'
import filterReviews from '../js/RateABiz/filter_reviews'
import filterStats from '../js/RateABiz/filter_stats'
import MobileRateABiz from '../components/Home/Mobile/RateABiz/Widget'
import Feature from '../components/Home/Feature'
import fetch from 'isomorphic-unfetch'
import Widget from '../components/Home/RateABiz/Widget'
import ReviewsWidget from '../components/Home/Reviews/ReviewsWidget'
import data from '../js/RateABiz/data.json'
import Ada from '../components/Home/Ada'
import ServiceList from '../components/Home/ServiceList'
import WidgetMobile from '../components/Home/RateABiz/WidgetMobile'
import Map from '../components/Home/Map'
import ReviewsWidgetCopy from '../components/Home/Reviews/ReviewsWidget copy'

const useStyles = makeStyles(theme => ({
  fullWidth: {
    width: '100vw',
    position: 'relative',
    marginLeft: '-50vw',
    left: '50%'
  }
}))

export default function Index({ reviews, stats }) {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12}>
        <Box height="60vh" className={classes.fullWidth}>
          <Hidden smUp>
            <Image src="home/feature_img_mobile.png" />
          </Hidden>
          <Hidden xsDown>
            <Image src="home/athletic_smiles.jpg" />
          </Hidden>
        </Box>
      </Grid>

      {/* Features for mobile */}
      <Hidden smUp>
        <Grid item xs={12} sm={4} md={3}>
          {/* Feature List Mobile */}
          <Box className={classes.fullWidth}>
            <MobileFeatures />
          </Box>
        </Grid>
      </Hidden>
      {/* Feature for Desktop & tablet */}
      <Hidden xsDown>
        {/* FEATURES ROW */}

        <Grid item sm={4}>
          {/* Feature 1 */}
          <Box>
            <Feature
              label="Quality Care"
              description="We will provide you and your family with professional quality comfort and dental care"
            />
          </Box>
        </Grid>
        <Grid item sm={4}>
          {/* Feature 2 */}
          <Box>
            <Feature
              label="Services"
              description="Cosmetic, Preventative, Root Canals and many more. We have something for everyone"
            />
          </Box>
        </Grid>
        <Grid item sm={4}>
          {/* Feature 3 */}
          <Box>
            <Feature
              label="Timely"
              description="We know your time is valuable so at Healthy Smile, we offer convenient office hours"
            />
          </Box>
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid item md={6} lg={7}>
          <Box>
            <ServiceList />
          </Box>
        </Grid>
        {/* ADA  */}
        <Grid item md={6} lg={5}>
          <Box height={300}>
            <Ada />
          </Box>
        </Grid>
      </Hidden>
      {/* REVIEWS AND ADA */}
      <Hidden xsDown>
        <Grid item xs={12} sm={4} md={6} lg={7} container alignItems="center">
          <Grid item xs>
            <Box height={500}>
              <Typography color="textSecondary" variant="h1" align="center">
                TODO: Simile Gallery Before after
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        {/* Reviews */}
        <Hidden smUp>
          <Box>
            <WidgetMobile stats={stats} reviews={reviews} />
          </Box>
        </Hidden>
        <Hidden xsDown>
          <Box>
            <Widget stats={stats} reviews={reviews} />
          </Box>
        </Hidden>
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
        <Hidden xsDown>
          <Box height={300} bgcolor="success.dark">
            <Image src="dummy/300x400.png" />
          </Box>
        </Hidden>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* About the Doctors */}
        <Box height={300}>
          <Image src="home/building.jpg" />
        </Box>
      </Grid>
      <Hidden smDown>
        <Grid item md={6}>
          {/* About image */}
          <Box height={300}>
            <Image src="home/man_smiling.jpg" />
          </Box>
        </Grid>
      </Hidden>

      {/* CALL TO ACTION */}
      <Grid item xs container justify="center">
        {/* Call to action */}
        <Grid item xs={12} md={6}>
          <Cta />
        </Grid>
      </Grid>
      {/* MAP TO OFFICE */}
      <Grid item xs={12} container justify="center">
        <Grid item xs={12} md={8}>
          <Box>
            <Map />
          </Box>
        </Grid>
      </Grid>
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
