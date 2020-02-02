import React from 'react'
import { makeStyles, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    alignItems: 'center',
    height: '100%',
    gridTemplateColumns: theme.grid.template.columns
  },
  button: {
    gridColumn: 'col-start 8 / col-end 8'
  },
  text: {
    gridColumn: 'col-start 1 / col-end 4'
  }
}))

const Cta = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h2">
        Try today
      </Typography>
      <Button className={classes.button} variant="contained" color="primary">
        Try now
      </Button>
    </div>
  )
}

export default Cta
