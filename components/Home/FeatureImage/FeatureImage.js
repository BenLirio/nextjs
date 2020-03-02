import { Box, Grid } from '@material-ui/core'
import React from 'react'
import Image from '../../shared/Image'

const FeatureImage = () => {
  return (
    <Grid item xs={12}>
      <Box height={450}>
        <Image src="/home/feature/feature_2.jpeg"></Image>
      </Box>
    </Grid>
  )
}
export default FeatureImage
