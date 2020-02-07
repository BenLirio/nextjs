import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '1rem',
    background: theme.palette.primary.dark,
    color: theme.palette.grey[50]
  }
}))

const DaySchedule = ({ day, open, close }) => {
  return (
    <>
      <Grid item xs={6}>
        <Typography variant="body1" align="right">
          {day}:
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1" align="left">
          {open}am - {close}pm
        </Typography>
      </Grid>
    </>
  )
}

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <DaySchedule day="Monday" open="8" close="8" />
        <DaySchedule day="Tuesday" open="8" close="8" />
        <DaySchedule day="Wednesday" open="8" close="8" />
        <DaySchedule day="Thursday" open="8" close="8" />
        <DaySchedule day="Friday" open="8" close="8" />
        <DaySchedule day="Saturday" open="8" close="8" />
        <DaySchedule day="Sunday" open="8" close="8" />
        <Grid item xs={12}>
          <Typography align="center">©Copyright - Ona Healthy Smile</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
