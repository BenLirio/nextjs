import React from 'react'
import { Grid } from '@material-ui/core'
import Cta from '../Cta'

const CtaRow = () => {
  return (
    <Grid item xs container justify="center">
      <Grid item xs={12} md={6}>
        <Cta />
      </Grid>
    </Grid>
  )
}

export default CtaRow
