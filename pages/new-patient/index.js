import {
  Grid,
  Typography,
  Box,
  Card,
  CardHeader,
  CardActions,
  Button,
  CardMedia
} from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'
import Contact from '../../components/NewPatient/Contact'
import Faq from '../../components/NewPatient/Faq'
import Insurance from '../../components/NewPatient/Insurance'
import Paperwork from '../../components/NewPatient/Paperwork'
import Payment from '../../components/NewPatient/Payment'
import GoogleMap from '../../components/Home/6-MapRow/GoogleMap'
import MapRow from '../../components/Home/6-MapRow/MapRow'
import MeetTheTeam from '../../components/NewPatient/MeetTheTeam'

const index = () => {
  const router = useRouter()
  return (
    <Grid item container xs={12} spacing={5} justify="center">
      <Grid item xs={12}>
        <Box marginTop={5}></Box>
        <Typography variant="h2">New Patient Information</Typography>
      </Grid>

      <Grid item xs={8} container spacing={5}>
        <Grid item xs={12}>
          <Insurance />
        </Grid>
        <Grid item xs={12}>
          <Payment />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <Paperwork />
        </Grid>
        <Box m={3} />
        <Faq />
      </Grid>
      <Grid item xs={12} container spacing={5}>
        <MapRow />
      </Grid>
      <Grid item xs={12}>
        <Box marginTop={5} />
      </Grid>
    </Grid>
  )
}

export default index
