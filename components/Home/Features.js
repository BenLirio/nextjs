import React from 'react'
import { makeStyles, Hidden, Grid, Box } from '@material-ui/core'
import Feature from './Feature'
import MobileFeatures from './Mobile/Features/Features'

const Features = () => {
  return (
    <>
      <Hidden smUp>
        <Grid item xs={12} sm={4} md={3}>
          {/* Feature List Mobile */}
          <Box>
            <MobileFeatures />
          </Box>
        </Grid>
      </Hidden>

      <Hidden xsDown>
        {/* FEATURES ROW */}

        <Grid item sm={4}>
          {/* Feature 1 */}
          <Box>
            <Feature
              label="Quality Care"
              description="We will provide you and your family with professional quality comfort and dental care"
            />
          </Box>
        </Grid>
        <Grid item sm={4}>
          {/* Feature 2 */}
          <Box>
            <Feature
              label="Services"
              description="Cosmetic, Preventative, Root Canals and many more. We have something for everyone"
            />
          </Box>
        </Grid>
        <Grid item sm={4}>
          {/* Feature 3 */}
          <Box>
            <Feature
              label="Timely"
              description="We know your time is valuable so at Healthy Smile, we offer convenient office hours"
            />
          </Box>
        </Grid>
      </Hidden>
    </>
  )
}

export default Features
