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
        <Typography variant="h3">Payment</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          We realize that every person’s financial situation is different. For
          this reason we have worked hard to provide a variety of payment
          options to help you receive the dental care needed to enjoy a health
          and confident smile with respect to your budget.
        </Typography>
      </Grid>
      <Grid item xs={4}>
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
