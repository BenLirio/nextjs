import React from 'react'
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.sizes.static[3]
  },
  doctor: {
    height: theme.sizes.static[2],
    backgroundSize: 'cover'
  },
  doctorCard: {
    gridColumn: 'center-start span 2'
  },
  grid: {
    display: 'grid',
    ...theme.grid.template.columns
  }
}))

const Employees = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <Card className={classes.doctorCard}>
          <CardActionArea>
            <CardMedia className={classes.doctor} image="/drOna.jpg" />
          </CardActionArea>
          <CardActions>
            <Button>See more</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Employees
