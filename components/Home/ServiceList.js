import React from 'react'
import {
  Paper,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from '@material-ui/core'
import Link from '../shared/Link'

const ServiceList = () => {
  return (
    <Card variant="outlined">
      <CardHeader title="How we help you" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={1}></Grid>
          <Grid item xs>
            <Typography variant="h6">Cosmetic</Typography>
            <ListItemText>
              <Link href="bonding">Bonding</Link>
            </ListItemText>
            <ListItemText>
              <Link href="bonding">Bridges</Link>
            </ListItemText>
            <ListItemText>
              <Link href="bonding">Dentures</Link>
            </ListItemText>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Preventative</Typography>
            <ListItemText>
              <Link href="bonding">Bonding</Link>
            </ListItemText>
            <ListItemText>
              <Link href="bonding">Bridges</Link>
            </ListItemText>
            <ListItemText>
              <Link href="bonding">Dentures</Link>
            </ListItemText>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Other</Typography>
            <ListItemText>
              <Link href="bonding">Bonding</Link>
            </ListItemText>
            <ListItemText>
              <Link href="bonding">Bridges</Link>
            </ListItemText>
            <ListItemText>
              <Link href="bonding">Dentures</Link>
            </ListItemText>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ServiceList
