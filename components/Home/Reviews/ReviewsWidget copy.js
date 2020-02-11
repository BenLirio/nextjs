import React from 'react'
import {
  Card,
  CardHeader,
  Paper,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
    borderRadius: theme.shape.large.borderRadius
  },
  list: {
    borderRadius: 0,
    width: '100%',
    padding: theme.spacing(1),
    background: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'space-around'
  },
  review: {
    borderRadius: 0,
    borderStyle: 'none',
    flex: '1',
    margin: theme.spacing(1)
  }
}))

const ReviewsWidgetCopy = ({ stats, reviews }) => {
  const classes = useStyle()
  return (
    <>
      <Typography variant="h2">What others are saying</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Reviews from RateABiz
      </Typography>

      <Paper variant="outlined" className={classes.list}>
        {reviews.map(review => {
          return (
            <Paper className={classes.review} variant="outlined">
              <Typography>test</Typography>
            </Paper>
          )
        })}
      </Paper>
    </>
  )
}

export default ReviewsWidgetCopy
