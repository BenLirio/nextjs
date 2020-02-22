import {
  Grid,
  Typography,
  Box,
  Card,
  CardHeader,
  CardActions,
  Button
} from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import Contact from '../../components/NewPatient/Contact'
import Faq from '../../components/NewPatient/Faq'
import Insurance from '../../components/NewPatient/Insurance'
import Paperwork from '../../components/NewPatient/Paperwork'
import Payment from '../../components/NewPatient/Payment'

const index = () => {
  const router = useRouter()
  return (
    <Grid item container xs={12} spacing={5} justify="center">
      <Grid item xs={12}>
        <Box marginTop={5}></Box>
        <Typography variant="h2">All the info you need</Typography>
      </Grid>
      <Grid item xs={8} container spacing={5}>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardHeader title="But first would you like to..." />
            <CardActions>
              <Button color="primary">Meet the team</Button>
              <Button color="primary">View our Services</Button>
            </CardActions>
          </Card>
        </Grid>
        <Typography variant="h3">Insurance & Payment</Typography>
        {/* INFO */}
        <Grid item xs={6}>
          <Insurance />
        </Grid>
        <Grid item xs={6}>
          <Payment />
        </Grid>
        <Grid item xs={12}>
          <Paperwork />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        {/* FAQ */}
        <Faq />
      </Grid>

      <Grid item xs={12}>
        <Box marginTop={5} />
      </Grid>
    </Grid>
  )
}

export default index
