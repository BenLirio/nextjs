import React from 'react'
import { Grid } from '@material-ui/core'
import Cta from '../Cta'
import YourDoctor from './YourDoctor'

const CtaRow = () => {
  return (
    <Grid item xs={12}>
      <YourDoctor />
    </Grid>
  )
}

export default CtaRow
