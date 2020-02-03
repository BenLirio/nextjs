import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.grey[200],
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows:
      '[text-start img1-start]1fr[text-end img3-start] 1fr[img2-start img1-end] 1fr[img3-end img2-end]',
    gridGap: '2rem'
  },
  aboutText: {
    gridRow: 'text-start / text-end'
  },
  aboutImage1: {
    background: theme.palette.primary.light,
    gridRow: 'img1-start / img1-end'
  },
  aboutImage2: {
    background: theme.palette.primary.light,
    gridRow: 'img2-start / img2-end',
    gridColumn: '2 / 3'
  },
  aboutImage3: {
    background: theme.palette.primary.light,
    gridColumn: '1',
    gridRow: 'img3-start / img3-end'
  },
  [theme.breakpoints.down('sm')]: {
    root: {
      gridTemplateRows: `${theme.sizes.static[2]} ${theme.sizes.static[4]}`,
      gridTemplateColumns: '1fr'
    },
    aboutImage2: {
      display: 'none'
    },
    aboutImage3: {
      display: 'none'
    },
    aboutImage1: {
      gridRow: '2'
    },
    aboutText: {
      gridRow: '1'
    }
  }
}))

const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.aboutText}>
        <Typography variant="h2">Healthy Smile</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
          necessitatibus dolores beatae, cumque placeat consequuntur rem quod
          harum esse ab natus reprehenderit similique! Porro accusamus, magnam
          alias quaerat expedita voluptatum quod ipsum eos modi provident.
          Minima consectetur eius animi!
        </Typography>
      </div>
      <div className={classes.aboutImage1}></div>
      <div className={classes.aboutImage2}></div>
      <div className={classes.aboutImage3}></div>
    </div>
  )
}

export default About
