import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import RestoreIcon from '@material-ui/icons/Restore'
import AssignmentIcon from '@material-ui/icons/Assignment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const icons = {
  favorite: <FavoriteIcon fontSize="large" />,
  restore: <RestoreIcon fontSize="large" />,
  Assignment: <AssignmentIcon fontSize="large" />
}

const CustomListItem = ({ title, icon, divider, secondary }) => {
  return (
    <ListItem button divider={!!divider}>
      <ListItemIcon>{icons[icon]}</ListItemIcon>
      <ListItemText primary={title} secondary={secondary} />
      <ListItemIcon edge="end">
        <NavigateNextIcon />
      </ListItemIcon>
    </ListItem>
  )
}

const MobileFeatures = () => {
  return (
    <List>
      <CustomListItem
        title="We Love our patients"
        secondary="Quality and comfortable care"
        icon="favorite"
        divider
      />
      <CustomListItem
        title="Timely service"
        secondary="Your time is valuable, we respect that"
        icon="restore"
        divider
      />
      <CustomListItem
        title="Our Services"
        secondary="Browse our services for more information"
        icon="Assignment"
      />
    </List>
  )
}

export default MobileFeatures
