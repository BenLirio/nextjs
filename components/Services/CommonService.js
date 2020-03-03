import React from 'react'
import { Typography, List, ListItemText, ListItem } from '@material-ui/core'
import { useRouter } from 'next/router'

const services = [
  'Crowns',
  'Implants',
  'Invisalign',
  'Snap-On-Smile',
  'Whitening',
  'Home Care'
].sort()

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100)

const CommonService = ({ myRef }) => {
  const router = useRouter()
  const executeScroll = () => scrollToRef(myRef)
  const { pathname } = router
  const servicePressed = service => {
    router.push({ pathname, query: { service } })
    executeScroll(myRef)
  }
  return (
    <>
      <Typography variant="h4">Common Service</Typography>
      <List>
        {services.map(service => {
          return (
            <ListItem button onClick={() => servicePressed(service)}>
              <ListItemText>{service}</ListItemText>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default CommonService
