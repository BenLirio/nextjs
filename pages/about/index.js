import React from 'react'
import Layout from '../../components/Layout/Layout'
import Section from '../../components/Layout/Section'
import Building from '../../components/About/Building'
import Employees from '../../components/About/Employees'
import { Grid, Box, Typography } from '@material-ui/core'
import Image from '../../components/shared/Image'

const about = () => {
  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="h1">About</Typography>
        </Grid>
        <Grid item xs={8}>
          <Box height={400}>
            <Image src="dummy/900x400.png" />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default about
