import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import React from 'react'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.medium.borderRadius
  },
  media: {
    height: theme.spacing(20)
  }
}))

const NewSmile = () => {
  const classes = useStyles()
  const router = useRouter()
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">How we help you</Typography>
      </Grid>

      <Grid item xs={4}>
        <Card>
          <CardHeader title="Cosmetic" />
          <CardMedia
            image={'/home/cosmetic/cosmetic_2.jpeg'}
            style={{ height: '160px' }}
          />
          <CardActions>
            <Button onClick={() => router.push('/services')} variant="text">
              View services
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Preventative" />
          <CardMedia
            image={'/home/preventative/preventative_3.jpeg'}
            style={{ height: '160px' }}
          />
          <CardActions>
            <Button onClick={() => router.push('/services')} variant="text">
              view services
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Other" />
          <CardMedia image={'/home/xray.jpeg'} style={{ height: '160px' }} />
          <CardActions>
            <Button onClick={() => router.push('/services')} variant="text">
              view Services
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default NewSmile
