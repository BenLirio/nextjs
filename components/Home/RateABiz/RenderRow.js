import react from 'react'
import {
  makeStyles,
  ListItem,
  Card,
  CardContent,
  Typography
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  text: {
    maxWidth: 256,
    margin: 'auto'
  },
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}))

const renderRow = props => {
  const { review, style } = props
  const classes = useStyles()
  return (
    <ListItem style={style} key={review.id}>
      <Card variant="outlined" className={classes.root}>
        <CardContent>
          <Typography variant="h5" align="center">
            {review.name}
          </Typography>
          <div className={classes.ratingWrapper}>
            <Rating
              name={`patient-${review.id}`}
              value={review.rating}
              size="small"
            />
          </div>
          <Typography variant="subtitle1" align="center">
            {review.title}
          </Typography>
          <Typography
            align="center"
            variant="body1"
            color="textSecondary"
            className={classes.text}
          >
            {review.text}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  )
}
export default renderRow
