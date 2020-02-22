import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  ListItemText,
  Typography,
  makeStyles
} from '@material-ui/core'
import React from 'react'
import Link from '../shared/Link'
import services from '../../js/services/services'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.medium.borderRadius
  }
}))

const ServiceList = () => {
  const classes = useStyles()
  return (
    <div className={classes.card}>
      <CardHeader title="Services" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          {services.map(service => {
            return (
              <Grid item xs key={service.name}>
                <Typography variant="h6">{service.name}</Typography>
                {service.items.map(item => {
                  return (
                    <ListItemText key={item.name}>
                      <Link href={item.href}>{item.name}</Link>
                    </ListItemText>
                  )
                })}
              </Grid>
            )
          })}
        </Grid>
      </CardContent>
    </div>
  )
}

export default ServiceList
