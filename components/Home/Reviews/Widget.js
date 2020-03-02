import React, { useContext } from 'react'
import StatsContext from '../../shared/context/StatsContext'
import { Card, CardHeader, makeStyles, CardContent } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.medium.borderRadius
  },
  reviews: {
    background: theme.palette.background.default
  }
}))

const Widget = () => {
  const classes = useStyles()
  const stats = useContext(StatsContext)
  return (
    <Card className={classes.card} variant="outlined">
      <CardHeader title="What others are saying" subheader="starts" />
      <CardContent className={classes.reviews}></CardContent>
    </Card>
  )
}

export default Widget
