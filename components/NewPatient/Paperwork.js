import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp'
import {
  IconButton,
  Typography,
  Button,
  Card,
  makeStyles,
  CardContent,
  CardActions
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.medium.borderRadius
  },

  button: {
    borderRadius: theme.shape.small.borderRadius
  }
}))

const Paperwork = () => {
  const classes = useStyles()
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h4">New Patient Form</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          We provide online access to to our new patient form at your convince
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          endIcon={<GetAppIcon />}
          className={classes.button}
        >
          Download
        </Button>
      </CardActions>
    </Card>
  )
}

export default Paperwork
