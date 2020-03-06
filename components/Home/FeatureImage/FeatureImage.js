import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Image from '../../shared/Image'

const FeatureImage = () => {
  return (
    <Grid item xs={12}>
      <Box position="absolute" marginLeft={4}>
        <Typography variant="h1">Healthy Smile</Typography>
      </Box>
      <Box height={450} marginBottom={0}>
        <Image src="/home/feature/feature_1.jpeg"></Image>
      </Box>
    </Grid>
  )
}
export default FeatureImage
