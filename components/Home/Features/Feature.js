import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  Collapse,
  CardContent,
  Typography
} from '@material-ui/core'
import { useRouter } from 'next/router'

const Feature = ({ type }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }

  let title = ''
  let image = ''
  let description = ''
  switch (type) {
    case 'cosmetic': {
      title = 'Cosmetic'
      image = '/home/cosmetic/cosmetic_2.jpeg'
      description =
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quaerat ipsa eveniet et delectus deserunt.'
      break
    }
    case 'preventative': {
      title = 'Preventative'
      image = '/home/preventative/preventative_3.jpeg'
      description =
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quaerat ipsa eveniet et delectus deserunt.'
      break
    }
    case 'other': {
      image = '/home/xray.jpeg'
      title = 'Other'
      description =
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quaerat ipsa eveniet et delectus deserunt.'
      break
    }
    default: {
      break
    }
  }
  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia image={image} style={{ height: '150px' }} />
      <CardActions>
        <Button onClick={toggleOpen} variant="text">
          {!open ? 'Learn more' : 'hide'}
        </Button>
      </CardActions>
      <Collapse in={open}>
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Feature
