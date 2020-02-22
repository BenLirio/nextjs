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
  CardHeader,
  Hidden
} from '@material-ui/core'
import Image from '../../shared/Image'
import Title from './Title'
import Guide from './Guide'
import TitleMobile from './TitleMobile'

const useStyles = makeStyles(theme => ({
  image: {
    // background: 'url("/home/brush_teeth.jpg")',
    background: '#444',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    width: '100%',
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
        <div className={classes.image} variant="outlined">
          <Container>
            <Hidden smDown>
              <Title />
            </Hidden>
            <Hidden mdUp>
              <TitleMobile />
            </Hidden>
          </Container>
        </div>
      </Grid>
    </>
  )
}

export default Desktop
