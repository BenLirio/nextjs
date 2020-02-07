import React from 'react'
import {
  Collapse,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const MobileRateABizExpandedList = ({ expanded, reviews }) => {
  return (
    <Collapse in={expanded}>
      <CardContent>
        <List>
          {reviews.map(review => {
            return (
              <ListItem key={review.id} divider>
                <ListItemText
                  primary={
                    <>
                      <Typography variant="h5">{review.name}</Typography>
                      <Rating value={review.rating} readOnly size="small" />
                      <Typography variant="subtitle1">
                        {review.title}
                      </Typography>
                      <Typography variant="body2">{review.text}</Typography>
                    </>
                  }
                />
              </ListItem>
            )
          })}
        </List>
      </CardContent>
    </Collapse>
  )
}

export default MobileRateABizExpandedList
