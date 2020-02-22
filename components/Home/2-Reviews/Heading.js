import React, { useContext } from 'react'
import { Grid, Link, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import StatsContext from '../../shared/context/StatsContext'

const url =
  'https://www.rateabiz.com/reviews/healthy-smile-grand-rapids-mi/ce34016f3fd1daf75a0daca4eb322873/summary'

const Heading = () => {
  const stats = useContext(StatsContext)
  return (
    <Grid item xs={12}>
      <Typography variant="h3">
        What{' '}
        <Link href={url} target="_blank">
          {stats.count}
        </Link>{' '}
        others are saying
      </Typography>
      <Rating name="rating" value={stats.rating} />
      <Typography color="textSecondary">
        <Link href={url} target="_blank">
          {stats.percent}%{' '}
        </Link>
        would recommend
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Verified Reviews from{' '}
        <Link href={url} target="_blank">
          RateABiz
        </Link>
      </Typography>
    </Grid>
  )
}

export default Heading
