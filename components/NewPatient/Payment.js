import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
  ListItemIcon,
  IconButton,
  Grid,
  Typography
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

const Payment = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4">Payment</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">
          PAYMENT BLURB(15-20w) Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Rerum ex animi repudiandae quaerat quisquam
          reprehenderit?
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <List subheader={<ListSubheader>Payment Methods</ListSubheader>}>
          <ListItem>
            <ListItemText primary="Credit Card" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cash or Check" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Payment Plan" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Many more" />
            <ListItemIcon>
              <IconButton>
                <InfoIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
      </Grid>
    </>
  )
}

export default Payment
