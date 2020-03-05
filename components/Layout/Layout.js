import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import {
  Container,
  Box,
  Grid,
  Fade,
  makeStyles,
  Typography
} from '@material-ui/core'
import { useRouter } from 'next/router'
import FeatureImage from '../Home/FeatureImage/FeatureImage'
import Banner from './Header/Banner'

const useStyles = makeStyles(theme => ({
  body: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  root: {
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
  let title = ''

  switch (/\/([a-zA-Z-]*)/.exec(pathname)[1]) {
    case '': {
      title = 'Family & Cosmetic Dentistry'
      break
    }
    case 'new-patient': {
      title = 'New Patient Information'
      break
    }
    case 'services': {
      title = 'Services'
      break
    }
    case 'about': {
      title = 'About'
      break
    }
    default: {
      title = 'unset title'
      break
    }
  }
  return (
    <div className={classes.root}>
      <Header />
      {pathname === '/' ? <FeatureImage /> : null}
      <div className={classes.body}>
        <Container className={classes.container}>
          <Grid container justify="center" spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h2">{title}</Typography>
            </Grid>
            {children}
          </Grid>
        </Container>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
