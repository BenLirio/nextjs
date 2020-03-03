import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardHeader,
  Grid
} from '@material-ui/core'
import { FixedSizeList } from 'react-window'
import { useRouter } from 'next/router'

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
].sort()

const ServiceList = () => {
  const router = useRouter()
  const { query, pathname } = router
  return (
    <>
      <Card style={{ borderRadius: '0' }}>
        <CardHeader title="All services" />
        <FixedSizeList
          height={400}
          width={400}
          itemSize={46}
          itemCount={services.length}
        >
          {({ style, index }) => {
            const service = services[index]
            return (
              <ListItem
                key={index}
                style={style}
                button
                onClick={() => router.push({ pathname, query: { service } })}
                selected={query.service === service}
              >
                <ListItemText>{service}</ListItemText>
              </ListItem>
            )
          }}
        </FixedSizeList>
      </Card>
    </>
  )
}

export default ServiceList
