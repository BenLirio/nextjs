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
    <>
      <Divider />
      <Container>
        <Box bgcolor="background.default">
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
        </Box>
      </Container>
      <Divider />
      <Typography variant="subtitle2" align="center">
        ©Copyright - Ona Healthy Smile
      </Typography>
    </>
  )
}

export default Footer
