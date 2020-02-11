import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
  ListItemIcon,
  IconButton
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

const Payment = () => {
  return (
    <Box bgcolor="background.paper">
      <List subheader={<ListSubheader>Payment Methods</ListSubheader>}>
        <ListItem>
          <ListItemText primary="Credit Card" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Cash or Check" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Payment Plan" />
          <ListItemIcon>
            <IconButton>
              <InfoIcon />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  )
}

export default Payment
