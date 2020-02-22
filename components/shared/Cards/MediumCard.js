import React from 'react'
import { Card, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.medium.borderRadius
  }
}))

const MediumCard = ({ children }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      {children}
    </Card>
  )
}

export default MediumCard
