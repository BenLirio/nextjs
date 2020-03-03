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
  Typography,
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

const Payment = () => {
  return (
    <>
      <Card>
        <CardHeader title="Payment" />
        <CardContent>
          We realize that every person’s financial situation is different. For
          this reason we have worked hard to provide a variety of payment
          options to help you receive the dental care needed to enjoy a health
          and confident smile with respect to your budget.
        </CardContent>
        <CardContent>
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
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  )
}

export default Payment
