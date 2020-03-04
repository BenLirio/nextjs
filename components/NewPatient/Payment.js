import React, { useState } from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
  ListItemIcon,
  IconButton,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Collapse,
  CardActions,
  Button
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

const Payment = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <Card>
        <CardHeader title="Payment" />
        <CardMedia
          image="/new-patient/payment.jpeg"
          style={{ height: '200px' }}
        />
        <CardContent>
          <Typography variant="body1">
            We realize that every person’s financial situation is different.
            For this reason we have worked hard to provide a variety of payment
            options to help you receive the dental care needed to enjoy a health
            and confident smile with respect to your budget.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" onClick={toggleOpen}>
            {!open ? 'Show Payment Methods' : 'hide'}
          </Button>
        </CardActions>
        <Collapse in={open}>
          <CardContent>
            <List>
              <ListItem>
                <ListItemText primary="Credit Card" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Cash or Check" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Payment Plan" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Many more" />
              </ListItem>
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default Payment
