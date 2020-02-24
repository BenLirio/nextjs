import React from 'react'
import { Typography, List, ListItemText, ListItem } from '@material-ui/core'

const CommonService = () => {
  return (
    <>
      <Typography variant="h4">Common Service</Typography>
      <List>
        <ListItem>
          <ListItemText>Service 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Service 2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Service 3</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Service 4</ListItemText>
        </ListItem>
      </List>
    </>
  )
}

export default CommonService
