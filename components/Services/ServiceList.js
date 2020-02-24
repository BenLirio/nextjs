import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const ServiceList = () => {
  return (
    <>
      <Typography variant="h4">All services</Typography>
      <List>
        <ListItem button>
          <ListItemText>Service 1</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Service 2</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Service 3</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Service 4</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Service 5</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Service 6</ListItemText>
        </ListItem>
      </List>
    </>
  )
}

export default ServiceList
