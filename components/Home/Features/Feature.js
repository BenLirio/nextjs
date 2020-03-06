import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  Collapse,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  card: {
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      cursor: 'pointer'
    }
  }
}))

const Feature = ({ type }) => {
  const router = useRouter()
  const classes = useStyles()
  let title = ''
  let image = ''
  switch (type) {
    case 'family': {
      title = 'Family'
      image = 'placeholder.svg'
      break
    }
    case 'cosmetic': {
      title = 'Cosmetic'
      image = 'placeholder.svg'
      break
    }
    case 'hospital': {
      image = 'placeholder.svg'
      title = 'Hospital'
      break
    }
    default: {
      break
    }
  }
  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia image={image} style={{ height: '200px' }} />
      <CardActions>
        <Button onClick={() => router.push(`/${type}`)} variant="text">
          View
        </Button>
      </CardActions>
    </Card>
  )
}

export default Feature
