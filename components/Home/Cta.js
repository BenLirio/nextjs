import React from 'react'
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.medium.borderRadius
  },
  button: {
    borderRadius: theme.shape.small.borderRadius
  }
}))

const Cta = () => {
  const classes = useStyles()
  return (
    <Card className={classes.card} variant="outlined">
      <CardHeader
        title="Get the care you deserve"
        subheader="*Call to action*"
      />
      <CardContent>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui hic
          quasi. Aperiam vel quia eius reiciendis quod architecto aspernatur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          Call
        </Button>
      </CardActions>
    </Card>
  )
}

export default Cta
