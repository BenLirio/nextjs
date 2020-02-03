import React from 'react'
import { makeStyles, Button, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const Cta = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={8}>
        <Typography variant="h3">Call today</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary">
          (616)-123-4321
        </Button>
      </Grid>
    </Grid>
  )
}

export default Cta
