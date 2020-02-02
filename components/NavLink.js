import React from 'react'
import { Tab } from '@material-ui/core'
import Link from 'next/link'

const NavLink = ({ value, label }) => {
  return (
    <>
      <Tab value={value} label={label} href={value} component={Link} naked />
    </>
  )
}

export default NavLink
