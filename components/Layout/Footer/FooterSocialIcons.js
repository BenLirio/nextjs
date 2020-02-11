import React from 'react'
import { IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
const FooterSocialIcons = () => {
  return (
    <>
      <IconButton>
        <FacebookIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
    </>
  )
}

export default FooterSocialIcons
