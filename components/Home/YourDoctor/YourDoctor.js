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
        <Typography variant="h3">Who will help you</Typography>
      </Grid>

      <Grid item xs={3}>
        <CardMedia image="/home/ona.jpg" style={{ height: '350px' }} />
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
            Dr. Suzzette Lirio Ona, D.M.D received a B.A. in Biochemistry from
            Mount Holyoke College in 1989 and went on to work as a
            chemist/biochemist until 1994. After her work as a chemist she
            attended Harvard School of Dental Medicine and graduated Magna Cum
            Laude in 1998. She then went on to do a year of residency at the
            University of Washington Hospital where she worked in depth treating
            medically, mentally, and physically challenged adults and children
            in the operating room and in an emergency room setting.
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
