import React, { useState, useEffect } from 'react'
import { AppBar, Tabs, Tab, Box, Hidden } from '@material-ui/core'
import Link from '../../shared/Link'
import { useRouter } from 'next/router'
import NavLink from '../NavLink'
import Image from '../../shared/Image'
import Banner from './Banner'

const Header = () => {
  const { pathname } = useRouter()

  return (
    <>
      <AppBar>
        <Banner />
        <Tabs value={/\/?[^\/]*/.exec(pathname)[0]}>
          <Tab href="/" value="/" component={Link} naked label="Home" />
          <Tab
            href="/new-patient/"
            value="/new-patient"
            component={Link}
            naked
            label="New Patient"
          />
          <Tab
            href="/services/"
            value="/services"
            component={Link}
            naked
            label="services"
          />
          <Tab
            href="/about/"
            value="/about"
            component={Link}
            naked
            label="about"
          />
        </Tabs>
      </AppBar>
      <Tabs />
      <Banner />
    </>
  )
}

export default Header
