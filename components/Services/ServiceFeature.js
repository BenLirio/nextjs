import React from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  Button,
  CardContent,
  Typography,
  CardMedia
} from '@material-ui/core'

const ServiceFeature = ({ age }) => {
  let title = ''
  let description = ''
  let image = ''
  switch (age) {
    case 'young': {
      title = "For Children's"
      description =
        'At Ona Healthy Smile we provide comprehensive dental care for children and adolescents. All members of our team are committed to creating a compassionate and stress-free dental experience for your child.'
      image = '/services/featured_services/young.jpeg'
      break
    }
    case 'mid': {
      title = 'For Adult'
      description =
        'It is very important to keep your teeth and gums in good health. We can help you maintain a healthy smile for a lifetime.'
      image = '/services/featured_services/mid.jpeg'
      break
    }
    case 'old': {
      title = 'For Elderly'
      description =
        'The goal of restorations is to replace missing teeth lost by decay or injury, protect the part of the tooth that remains, and restore the tooth’s shape and function.'
      image = '/services/featured_services/old.jpeg'
      break
    }
  }
  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia image={image} style={{ height: '200px' }} />
      <CardContent>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">Learn more</Button>
      </CardActions>
    </Card>
  )
}

export default ServiceFeature
