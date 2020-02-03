import React from 'react'
import { makeStyles } from '@material-ui/core'
import Image from '../Image'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url("/feature_image.jpg")',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}))

const FeatureImage = () => {
  return <Image opacity={50} src="feature_img_mobile.png"></Image>
}

export default FeatureImage
