import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  Typography,
  CardMedia,
  Collapse
} from '@material-ui/core'

const ServiceFeature = ({ service }) => {
  let title = ''
  let description = ''
  let image = ''
  switch (service) {
    case 'family': {
      title = 'Family'
      description =
        'At Ona Healthy Smile we provide comprehensive dental care for children and adolescents. All members of our team are committed to creating a compassionate and stress-free dental experience for your child.'
      image = '/services/featured_services/play_area.jpg'
      break
    }
    case 'cosmetic': {
      title = 'Cosmetic'
      description =
        'It is very important to keep your teeth and gums in good health. We can help you maintain a healthy smile for a lifetime.'
      image = '/services/featured_services/operation.jpg'
      break
    }
    case 'hospital': {
      title = 'Hospital'
      description =
        'The goal of restorations is to replace missing teeth lost by decay or injury, protect the part of the tooth that remains, and restore the tooth’s shape and function.'
      image = '/services/featured_services/old.jpeg'
      break
    }
  }
  const [more, setMore] = useState(false)
  const toggleMore = () => {
    setMore(!more)
  }
  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia image={image} style={{ height: '200px' }} />
      <CardContent>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={toggleMore} variant="text">
          {!more ? 'Learn more' : 'less'}
        </Button>
      </CardActions>
    </Card>
  )
}

export default ServiceFeature
