import React from 'react'
import { List, ListItem, ListSubheader, ListItemText } from '@material-ui/core'
import { useRouter, Router } from 'next/router'

const SideBar = ({ name, services }) => {
  const router = useRouter()
  const { query, pathname } = router
  const handleClick = service => {
    router.push({ pathname, query: { service } })
  }
  return (
    <List subheader={<ListSubheader>{name}</ListSubheader>}>
      {services.map(service => {
        return (
          <ListItem
            key={service}
            button
            selected={query.service === service}
            onClick={() => handleClick(service)}
          >
            <ListItemText primary={service} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default SideBar
