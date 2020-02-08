import React, { Children } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles
} from '@material-ui/core'
import Link from '../shared/Link'

const useStyles = makeStyles(theme => ({
  media: {
    height: 140
  }
}))

const AboutCard = ({ name, children }) => {
  const classes = useStyles()
  return (
    <Card variant="outlined">
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={`/about/${name}.png`} />
      <CardContent>{children}</CardContent>
      <CardActions>
        <Button component={Link} naked href={`/about/${name}/`} color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default AboutCard
