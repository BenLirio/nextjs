import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp'
import { IconButton, Typography, Button } from '@material-ui/core'
const Paperwork = () => {
  return (
    <>
      <Typography variant="h4">Save some time</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        We provide online access to to our new patient for at your convince
      </Typography>
      <Button color="primary" variant="contained" endIcon={<GetAppIcon />}>
        Download Form
      </Button>
    </>
  )
}

export default Paperwork
