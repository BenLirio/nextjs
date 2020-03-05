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
import Image from '../../shared/Image'

const Footer = () => {
  return (
    <Box paddingTop={5} boxShadow={3}>
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <FooterContact />
          </Grid>
          <Grid item xs={4} container>
            <Grid item xs={12}>
              <Box height={40}>
                <Image src="/home/ada.png" size="contain" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box height={40}>
                <Image src="/home/mda.png" size="contain" />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={4}>
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
