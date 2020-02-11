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
        <Button color="secondary" variant="contained">
          Call
        </Button>
      </CardActions>
    </Card>
  )
}

export default Cta
