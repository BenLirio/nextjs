import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  ListItemText,
  Typography
} from '@material-ui/core'
import React from 'react'
import Link from '../shared/Link'
import services from '../../js/services/services'

const ServiceList = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="How we help you" />
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
    </Card>
  )
}

export default ServiceList
