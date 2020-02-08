import { Grid, makeStyles, Typography, Fade } from '@material-ui/core'
import React from 'react'
import Service from '../../components/Services/Service'
import Bread from '../../components/shared/Bread'

const useStyles = makeStyles(theme => ({
  media: {
    height: 140
  }
}))

const services = () => {
  const classes = useStyles()
  return (
    <Fade in={true}>
      <Grid container spacing={5} justify="center">
        <Bread />
        <Grid item xs={12}>
          <Typography variant="h2">Services</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Service name="cosmetic">Lorem ipsum dolor sit.</Service>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Service name="preventative">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Service>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Service name="other">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis nihil reprehenderit natus ipsam unde dolores asperiores
            sed est. Quidem, reprehenderit.
          </Service>
        </Grid>
      </Grid>
    </Fade>
  )
}

export default services
