import React from 'react'
import {
  Typography,
  Grid,
  Box,
  makeStyles,
  Hidden,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  Button
} from '@material-ui/core'
import Image from '../../shared/Image'

const useStyles = makeStyles(theme => ({
  image: {
    borderRadius: theme.shape.medium.borderRadius
  }
}))

const YourDoctor = () => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">Who the doctor is</Typography>
      </Grid>

      <Grid item xs={3}>
        <CardMedia image="/home/ona.jpg" style={{ height: '300px' }} />
      </Grid>

      <Grid item xs={6}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          <Typography variant="h4">Dr. Suzzette Lirio Ona</Typography>
          <Typography variant="body1">
            DR. BIO(40-50w) Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Tenetur, rerum? Veritatis minus qui odit distinctio,
            reiciendis incidunt quaerat magnam? Beatae labore, omnis temporibus
            atque similique modi in quos porro repudiandae quia quis incidunt
            eius veniam neque hic odio doloribus! Doloremque.
          </Typography>
          <Box height={100}>
            <div style={{ width: '100%', height: '100%', display: 'flex' }}>
              <Image src="home/harvard.png" size="contain" />
              <Image src="home/uofw.png" size="contain" />
              <Image src="home/mount.png" size="contain" />
            </div>
          </Box>
        </div>
      </Grid>
      <Grid item xs={3}></Grid>
    </>
  )
}

export default YourDoctor