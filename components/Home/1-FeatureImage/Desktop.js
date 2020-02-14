import React from 'react'
import {
  makeStyles,
  Typography,
  Grid,
  Box,
  Button,
  Container,
  Paper,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'
import Image from '../../shared/Image'
import Title from './Title'
import Guide from './Guide'

const useStyles = makeStyles(theme => ({
  image: {
    background: 'url("/home/16_9.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))

const Desktop = () => {
  const classes = useStyles()
  return (
    <>
      <Grid item xs={12}>
        <div className={classes.image}>
          <Title />
          <Guide />
        </div>
      </Grid>
    </>
  )
}

export default Desktop
