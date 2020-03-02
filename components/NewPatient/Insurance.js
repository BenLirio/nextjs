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
  Typography
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

const Insurance = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h4">Insurance</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">
          INSURANCE BLUR(15-20w) Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id, deleniti nostrum aspernatur at reiciendis unde
          voluptatem. Alias.
        </Typography>
      </Grid>
      <Grid item xs={6}>
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
            <ListItemIcon>
              <IconButton>
                <InfoIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default Insurance
