import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Box,
  ListSubheader,
  ListItemIcon,
  IconButton,
  Divider
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

const Insurance = () => {
  return (
    <Box bgcolor="background.paper">
      <List subheader={<ListSubheader>Accepted Insurance</ListSubheader>}>
        <ListItem>
          <ListItemText primary="Delta Dental Premier" />
        </ListItem>
        <ListItem>
          <ListItemText primary=" Blue Cross Blue Shield" />
        </ListItem>
        <ListItem>
          <ListItemText primary="MetLife" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Aetna" />
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
    </Box>
  )
}

export default Insurance
