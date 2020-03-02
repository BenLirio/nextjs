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

const Paperwork = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Patient Form</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          We provide online access to to our new patient form at your convince
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" endIcon={<GetAppIcon />}>
          Download
        </Button>
      </CardActions>
    </Card>
  )
}

export default Paperwork
