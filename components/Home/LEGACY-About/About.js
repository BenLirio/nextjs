import React from 'react'

const About = () => {
  return (
    <>
      {/* ABOUT HEALTHY SMILE */}
      <Grid item xs={12} sm={8}>
        {/* About text */}
        <Box>
          <MobileAbout />
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        {/* Image */}
        <Hidden xsDown>
          <Box height={300} bgcolor="success.dark">
            <Image src="dummy/300x400.png" />
          </Box>
        </Hidden>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* About the Doctors */}
        <Box height={300}>
          <Image src="home/building.jpg" />
        </Box>
      </Grid>
      <Hidden smDown>
        <Grid item md={6}>
          {/* About image */}
          <Box height={300}>
            <Image src="home/man_smiling.jpg" />
          </Box>
        </Grid>
      </Hidden>
    </>
  )
}

export default About
