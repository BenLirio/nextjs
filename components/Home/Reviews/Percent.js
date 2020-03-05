import React from 'react'
import { Typography, Box, Link } from '@material-ui/core'
import { useContext } from 'react'
import StatsContext from '../../shared/context/StatsContext'

const url =
  'https://www.rateabiz.com/reviews/healthy-smile-grand-rapids-mi/ce34016f3fd1daf75a0daca4eb322873/summary'

const Percent = () => {
  const { percent, rating } = useContext(StatsContext)
  return (
    <Box fontStyle="italic">
      <Typography variant="h3" align="center" color="textSecondary">
        <Link href={url} target="_blank">
          {percent}%
        </Link>{' '}
        would recommend
      </Typography>
    </Box>
  )
}

export default Percent
