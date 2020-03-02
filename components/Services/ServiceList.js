import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const services = [
  'Implants',
  'Extractions',
  'Root Canal Therapy',
  'Emergency',
  'X-rays',
  'Schick Sensor',
  '3D Panorex',
  'Cosmetic',
  'Bonding',
  'Bridges',
  'Dentures',
  'Crowns',
  'Implants',
  'Invisalign',
  'Snap-On-Smile',
  'Veneers',
  'Whitening',
  'Preventative',
  'Nigh Gaurd',
  'Sleep Apnea/Snore Gaurd',
  'Cleaning Exams',
  'Home Care',
  'Dental X-Rays',
  'Sealants',
  'Sports Mouth Guards',
  'Children’s Dentistry',
  'Potential Dangers'
]

const ServiceList = () => {
  return (
    <>
      <Typography variant="h4">All services</Typography>
      <List>
        {services.map(service => {
          return (
            <ListItem button>
              <ListItemText>{service}</ListItemText>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default ServiceList
