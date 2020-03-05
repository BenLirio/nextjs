import React, { useContext } from 'react'
import { Grid, Link, Typography, Box } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import StatsContext from '../../shared/context/StatsContext'

const url =
  'https://www.rateabiz.com/reviews/healthy-smile-grand-rapids-mi/ce34016f3fd1daf75a0daca4eb322873/summary'

const Heading = () => {
  const { percent, count } = useContext(StatsContext)
  return (
    <Grid item xs={12}>
      <Typography variant="h3">What our patients say</Typography>

      <Typography variant="h5" color="textSecondary">
        <Link target="_blank" href={url}>
          {count}
        </Link>{' '}
        Verified reviews from{' '}
        <Link target="_blank" href={url}>
          RateABiz
        </Link>
      </Typography>
    </Grid>
  )
}

export default Heading
