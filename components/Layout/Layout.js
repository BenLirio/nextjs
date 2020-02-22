import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Container, Box, Grid, Fade, makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'
import FeatureImage from '../Home/1-FeatureImage/FeatureImage'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    background: theme.palette.background.offset
  },
  container: {
    background: theme.palette.background.default,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.large.borderRadius
    // borderTopRightRadius: theme.shape.large.borderRadius,
    // borderBottomLeftRadius: theme.shape.large.borderRadius
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const { pathname } = useRouter()

  return (
    <>
      <Header />
      {pathname === '/' ? <FeatureImage /> : null}
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container justify="center">
            {children}
          </Grid>
        </Container>
      </div>

      <Footer />
    </>
  )
}

export default Layout
