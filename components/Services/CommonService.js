import React from 'react'
import { Typography, List, ListItemText, ListItem } from '@material-ui/core'

const CommonService = () => {
  return (
    <>
      <Typography variant="h4">Common Service</Typography>
      <List>
        <ListItem>
          <ListItemText>Invisalign</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Crowns</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Implants</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Whitening</ListItemText>
        </ListItem>
      </List>
    </>
  )
}

export default CommonService
