import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Divider,
  IconButton,
  Button,
  Container
} from '@material-ui/core'
import React from 'react'

import FooterContact from './FooterContact'
import FooterHours from './FooterHours'
import FooterSocialIcons from './FooterSocialIcons'

const Footer = () => {
  return (
    <Box paddingTop={5} boxShadow={3}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <FooterContact />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FooterHours />
          </Grid>
          <Grid item xs={12}>
            <FooterSocialIcons />
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Typography variant="subtitle2" align="center">
        ©Copyright - Ona Healthy Smile
      </Typography>
    </Box>
  )
}

export default Footer
