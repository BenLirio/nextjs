import React from 'react'
import Layout from '../components/Layout/Layout'
import { makeStyles } from '@material-ui/core'
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

const API_URL =
  'https://s3.amazonaws.com/cdn.rateabiz.com/reviews/ce34016f3fd1daf75a0daca4eb322873/reviews.json'

const useStyles = makeStyles(theme => ({
  root: {},
  full: theme.grid.span.full,
  center: {
    gridColumn: 'center-start / center-end'
  },
  featureImage: {
    height: '60vh'
  },
  features: {
    height: '30vw'
  },
  rateABiz: {
    height: 500
  },
  about: {
    height: 800
  },
  cta: {
    background: theme.palette.secondary.light,
    height: 200
  },
  maps: {
    background: theme.palette.primary.light,
    height: 400
  }
}))

export default function Index({ reviews, stats }) {
  const classes = useStyles()
  return (
    <Layout>
      <Section width="full" height={4} variant="percent">
        <FeatureImage />
      </Section>
      <div className={clsx(classes.features, classes.center)}>
        <Features />
      </div>
      <div className={clsx(classes.rateABiz, classes.full)}>
        <RateABiz reviews={reviews} stats={stats} />
      </div>
      <div className={clsx(classes.about, classes.center)}>
        <About />
      </div>
      <div className={clsx(classes.cta, classes.full)}>
        <Cta />
      </div>
      <div className={clsx(classes.maps, classes.center)}>
        <Map />
      </div>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  // const res = await fetch(API_URL)
  // const { reviews, stats } = await res.json()
  const { reviews, stats } = rating_local
  return {
    reviews,
    stats
  }
}
