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

const TitleMobile = () => {
  const classes = useStyles()
  return (
    <div variant="outlined" className={classes.title}>
      <CardHeader
        title={
          <>
            <Typography variant="h2" style={{ color: '#EEE' }}>
              Healthy
            </Typography>
            <Typography variant="h2" style={{ color: '#EEE' }}>
              Smile
            </Typography>
          </>
        }
      />
    </div>
  )
}

export default TitleMobile
