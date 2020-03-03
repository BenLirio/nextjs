import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Box,
  ListSubheader,
  ListItemIcon,
  IconButton,
  Divider,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

const Insurance = () => {
  return (
    <>
      <Card>
        <CardHeader title="Insurance" />
        <CardContent>
          <Typography variant="body1">
            We are happy to submit the forms necessary to see that you receive
            the full benefits of your coverage; however, we can make no
            guarantee of any estimated coverage. Because the insurance policy is
            an agreement between you and the insurance company, we ask that all
            patients be directly responsible for all charges. All patients are
            expected to pay their estimated portion on the day treatment is
            received. Please know that we will do everything possible to see
            that you receive the full benefits of your policy. If for some
            reason your insurance company does not pay estimated benefits, then
            you are ultimately responsible for the entire treatment fee.
          </Typography>
        </CardContent>
        <CardContent>
          <List subheader={<ListSubheader>Accepted Insurance</ListSubheader>}>
            <ListItem>
              <ListItemText primary="Delta Dental Premier" />
            </ListItem>
            <ListItem>
              <ListItemText primary=" Blue Cross Blue Shield" />
            </ListItem>
            <ListItem>
              <ListItemText primary="MetLife" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Aetna" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Many more" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  )
}

export default Insurance
