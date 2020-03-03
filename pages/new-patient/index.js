import { Grid } from '@material-ui/core'
import React from 'react'
import MapRow from '../../components/Home/MapRow/MapRow'
import Faq from '../../components/NewPatient/Faq'
import Insurance from '../../components/NewPatient/Insurance'
import Payment from '../../components/NewPatient/Payment'

const index = () => {
  return (
    <>
      <Grid item xs={7} container spacing={5}>
        <Grid item xs={12}>
          <Insurance />
        </Grid>
        <Grid item xs={12}>
          <Payment />
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Faq />
      </Grid>
      <MapRow />
    </>
  )
}

export default index
