import { Grid } from '@material-ui/core'
import React from 'react'
import MapRow from '../../components/Home/MapRow/MapRow'
import Faq from '../../components/NewPatient/Faq'
import Insurance from '../../components/NewPatient/Insurance'
import Payment from '../../components/NewPatient/Payment'

const index = () => {
  return (
    <>
      <Grid item xs={8} container>
        <Insurance />
        <Payment />
      </Grid>
      <Grid item xs={4} container spacing={5}>
        <Faq />
      </Grid>
      <MapRow />
    </>
  )
}

export default index
