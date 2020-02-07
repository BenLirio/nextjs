import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import { Container } from '@material-ui/core'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
