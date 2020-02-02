import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import Link from '../src/Link'
import { useRouter } from 'next/router'
import NavLink from './NavLink'

const Header = () => {
  const { pathname } = useRouter()
  return (
    <>
      <AppBar>
        <Tabs value={pathname}>
          <Tab href="/" value="/" component={Link} naked label="Home" />
          <Tab
            href="/about"
            value="/about"
            component={Link}
            naked
            label="about"
          />
          <Tab
            href="/services"
            value="/services"
            component={Link}
            naked
            label="services"
          />
        </Tabs>
      </AppBar>
      <Tabs />
    </>
  )
}

export default Header
