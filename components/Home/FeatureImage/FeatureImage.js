import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Image from '../../shared/Image'

const FeatureImage = () => {
  return (
    <Grid item xs={12}>
      <Box height={450} marginBottom={-20}>
        <Image src="/home/feature/feature_1.jpeg"></Image>
      </Box>
    </Grid>
  )
}
export default FeatureImage
