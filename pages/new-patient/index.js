import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Grid, Typography, Fade } from '@material-ui/core'
import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter()
  return (
    <Fade in={true}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Insurance info,
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Services,
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            Patient Form
          </Typography>
        </Grid>
      </Grid>
    </Fade>
  )
}

export default index
