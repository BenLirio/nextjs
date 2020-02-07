import React from 'react'
import {
  CardHeader,
  Typography,
  IconButton,
  Grid,
  Link
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import LaunchIcon from '@material-ui/icons/Launch'

const url =
  'https://www.rateabiz.com/reviews/healthy-smile-grand-rapids-mi/ce34016f3fd1daf75a0daca4eb322873/summary'

const LaunchButton = () => {
  return (
    <IconButton component="a" href={url} target="_blank">
      <LaunchIcon />
    </IconButton>
  )
}
const Subheader = ({ stats }) => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Rating
          name="stats-rating"
          value={stats.rating}
          precision={0.1}
        ></Rating>
        <Typography>
          (
          <Link href={url} target="_blank">
            {stats.count}
          </Link>
          )
        </Typography>
      </div>
      <Typography>{stats.percent}% would recommend</Typography>
    </>
  )
}

const WidgetHeader = ({ stats }) => {
  return (
    <CardHeader
      title={<Typography variant="h4">RateABiz</Typography>}
      subheader={<Subheader stats={stats} />}
      action={<LaunchButton />}
    />
  )
}

export default WidgetHeader
