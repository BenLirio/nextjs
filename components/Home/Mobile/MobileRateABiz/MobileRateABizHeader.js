import React from 'react'
import { CardHeader, Typography, IconButton } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import LaunchSharpIcon from '@material-ui/icons/LaunchSharp'

const MobileRateABizHeader = ({ stats: { rating, count } }) => (
  <CardHeader
    title={`RateABiz (${count})`}
    subheader={
      <>
        <Rating name="rating" value={rating} precision={0.1} />
        <Typography>Verified Reviews</Typography>
      </>
    }
    action={
      <IconButton>
        <LaunchSharpIcon />
      </IconButton>
    }
  />
)

export default MobileRateABizHeader
