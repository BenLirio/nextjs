import React from 'react'
import { makeStyles, Card, CardHeader, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    background: theme.palette.background.default,
    width: 'max-content',
    border: 'none',
    borderRadius: 0,
    borderBottomRightRadius: theme.shape.medium.borderRadius
  }
}))

const Title = () => {
  const classes = useStyles()
  return (
    <Card variant="outlined" className={classes.title}>
      <CardHeader
        title={<Typography variant="h2">Ona Healthy Smile</Typography>}
        subheader={
          <Typography variant="h4" color="textSecondary">
            Family & Cosmetic Dentistry
          </Typography>
        }
      />
    </Card>
  )
}

export default Title
