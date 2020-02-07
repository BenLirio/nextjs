import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import RestoreIcon from '@material-ui/icons/Restore'
import AssignmentIcon from '@material-ui/icons/Assignment'

const icons = {
  favorite: <FavoriteIcon fontSize="large" />,
  restore: <RestoreIcon fontSize="large" />,
  assignment: <AssignmentIcon fontSize="large" />
}

const FeatureListItem = ({ title, icon, divider, secondary }) => {
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

export default FeatureListItem
