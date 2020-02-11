import { Grid, makeStyles, Typography, Fade, Grow } from '@material-ui/core'
import React from 'react'
import Service from '../../components/Services/Service'
import Bread from '../../components/shared/Bread'
import services from '../../js/services/services'

const useStyles = makeStyles(theme => ({
  media: {
    height: 140
  }
}))

const index = () => {
  const classes = useStyles()
  return (
    <>
      <Bread />
      <Grid item xs={12}>
        <Typography variant="h2">Services</Typography>
      </Grid>
      {services.map(service => {
        return (
          <Grow in={true} key={service.name}>
            <Grid item xs={12} sm={6} md={4}>
              <Service {...service} />
            </Grid>
          </Grow>
        )
      })}
    </>
  )
}

export default index
