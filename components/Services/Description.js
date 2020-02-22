import React from 'react'
import {
  Card,
  CardHeader,
  makeStyles,
  CardContent,
  Typography,
  Box,
  CardMedia
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.shape.medium.borderRadius
  }
}))

const Description = ({ name, description }) => {
  const classes = useStyles()
  return (
    <Card variant="outlined" className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h4">{name || 'select a service'}</Typography>
        }
      />
      <CardMedia image="/home/16_9.svg" style={{ height: '200px' }} />
      <CardContent>
        {description &&
          description.map(section => {
            return (
              <>
                <Typography variant="h5">{section.title}</Typography>
                <Typography variant="body1" color="textSecondary">
                  {section.text}
                </Typography>
                <Box marginBottom={2} />
              </>
            )
          })}
      </CardContent>
    </Card>
  )
}

export default Description
