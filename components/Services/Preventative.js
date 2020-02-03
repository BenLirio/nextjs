import React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  CardActions,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  media: {
    height: theme.sizes.static[3]
  }
}))

const Preventative = () => {
  const classes = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image="/preventative.png" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Preventative
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The goal of Preventative dentistry is to transform an average smile
            into a terrific smile! To accomplish this goal, we analyze every
            aspect of a smile and then correct the problem.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View more
        </Button>
      </CardActions>
    </Card>
  )
}

export default Preventative
