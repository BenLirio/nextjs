import React from 'react'
import {
  Card,
  Typography,
  CardContent,
  makeStyles,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  guide: {
    marginTop: '240px',
    width: 'max-content',
    boxShadow: 'none',
    borderRadius: 0,
    borderTopRightRadius: theme.shape.small.borderRadius,
    background: theme.palette.background.default
  }
}))

const Guide = () => {
  const classes = useStyles()
  return (
    <Card className={classes.guide}>
      <CardContent>
        <Typography variant="h5">Daily Hygiene Guide</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Doctor Recommended
        </Typography>

        <Button variant="outlined">View Guide</Button>
      </CardContent>
    </Card>
  )
}

export default Guide
