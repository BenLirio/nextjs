import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Container, Box, Grid, Fade } from '@material-ui/core'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Grid container justify="center" spacing={5}>
          {children}
        </Grid>
      </Container>
      <Box paddingTop={5}>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
