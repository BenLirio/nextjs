import React from 'react'

import { Grid, Box, makeStyles } from '@material-ui/core'
import Image from '../../shared/Image'

const Ada = () => {
  return (
    <>
      <Grid item xs={6} style={{ height: '100px' }}>
        <Image src="home/ada.png" size="contain" />
      </Grid>
      <Grid item xs={6} style={{ height: '100px' }}>
        <Image src="home/mda.png" size="contain" />
      </Grid>
    </>
  )
}

export default Ada
