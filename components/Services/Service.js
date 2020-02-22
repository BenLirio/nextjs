import React, { Children } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
  Typography
} from '@material-ui/core'
import Link from '../shared/Link'

const useStyles = makeStyles(theme => ({
  media: {
    height: 140
  },
  service: {
    borderRadius: theme.shape.medium.borderRadius
  }
}))

const Service = ({ name, href, description }) => {
  const classes = useStyles()
  return (
    <Card variant="outlined" className={classes.service}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={`/services/${name}.png`} />
      <CardContent>
        <Typography color="textSecondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} naked href={href} color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Service
