import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Grid, Typography, Fade } from '@material-ui/core'
import { useRouter } from 'next/router'
import MeetTheTeam from '../../components/NewPatient/MeetTheTeam'
import Contact from '../../components/NewPatient/Contact'
import Payment from '../../components/NewPatient/Payment'
import Paperwork from '../../components/NewPatient/Paperwork'
import Insurance from '../../components/NewPatient/Insurance'

const index = () => {
  const router = useRouter()
  return (
    <>
      <Grid item xs={12} md={10} lg={8}>
        <MeetTheTeam />
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <Insurance />
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <Payment />
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={12} md={10} lg={8}>
        <Paperwork />
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={12} md={10} lg={8}>
        <Contact />
      </Grid>
    </>
  )
}

export default index
