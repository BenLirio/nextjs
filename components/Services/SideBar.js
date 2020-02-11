import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'

const SideBar = ({ name, items }) => {
  const router = useRouter()
  const { query } = router
  const handleClick = href => {
    router.push(href)
  }
  return (
    <List subheader={<ListSubheader>{name}</ListSubheader>}>
      {items.map(({ name, href }) => {
        return (
          <ListItem
            key={name}
            button
            selected={query.service === name}
            onClick={() => handleClick(href)}
          >
            <ListItemText primary={name} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default SideBar
