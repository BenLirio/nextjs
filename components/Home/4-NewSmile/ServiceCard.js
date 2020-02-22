import React from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardMedia
} from '@material-ui/core'
import MediumCard from '../../shared/Cards/MediumCard'

const ServiceCard = ({ title, image }) => {
  return (
    <MediumCard>
      <CardHeader title={title} />
      <CardMedia image={image} style={{ height: '160px' }} />
      <CardActions>
        <Button color="primary">Learn more</Button>
      </CardActions>
    </MediumCard>
  )
}

export default ServiceCard
