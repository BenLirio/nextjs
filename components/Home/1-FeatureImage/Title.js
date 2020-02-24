import React from 'react'
import { makeStyles, Card, CardHeader, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    width: 'max-content',
    borderRadius: 0,
    borderBottomRightRadius: theme.shape.medium.borderRadius,
    borderTopStyle: 'none',
    borderLeftStyle: 'none'
  }
}))

const Title = () => {
  const classes = useStyles()
  return (
    <div variant="outlined" className={classes.title}>
      <CardHeader
        title={
          <Typography variant="h1" style={{ color: '#EEE' }}>
            Ona Healthy Smile
          </Typography>
        }
      />
    </div>
  )
}

export default Title