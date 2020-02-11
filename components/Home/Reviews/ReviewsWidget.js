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
    boxShadow:
      'inset 0px 2px 1px -1px rgba(0,0,0,0.2),inset 0px 1px 1px 0px rgba(0,0,0,0.14),inset 0px 1px 3px 0px rgba(0,0,0,0.12)',
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

const ReviewsWidget = ({ stats, reviews }) => {
  const classes = useStyle()
  return (
    <Paper className={classes.root} variant="outlined">
      <Typography variant="h2">What others are saying</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Reviews from RateABiz
      </Typography>

      <div className={classes.list}>
        {reviews.map(review => {
          return (
            <Paper className={classes.review} variant="outlined">
              <Typography>test</Typography>
            </Paper>
          )
        })}
      </div>
    </Paper>
  )
}

export default ReviewsWidget
