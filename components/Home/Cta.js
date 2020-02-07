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

const Cta = () => {
  return (
    <Card>
      <CardHeader title="learn more today" subheader="it will be worth it" />
      <CardContent>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui hic
          quasi. Aperiam vel quia eius reiciendis quod architecto aspernatur.
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Now</Button>
      </CardActions>
    </Card>
  )
}

export default Cta
