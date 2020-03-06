import React from 'react'
import {
  Grid,
  List,
  ListItemText,
  ListItem,
  Card,
  CardHeader,
  Typography,
  CardContent,
  CardMedia,
  Box
} from '@material-ui/core'
import Image from '../../shared/Image'

const Doctors = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">Who will help</Typography>
      </Grid>
      <Grid item xs={2}>
        <List>
          <ListItem button selected={true}>
            <ListItemText>Dr. Ona</ListItemText>
          </ListItem>
          <ListItem button selected={false}>
            <ListItemText>Other doctors</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={10}>
        <Card>
          <CardHeader title="Dr. Suzzette Lirio Ona" />
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <CardMedia image="/home/ona.jpg" style={{ height: '350px' }} />
              </Grid>
              <Grid item xs={8} container direction="column">
                <Grid item xs>
                  <Typography>
                    Dr. Suzzette Lirio Ona, D.M.D received a B.A. in
                    Biochemistry from Mount Holyoke College in 1989 and went on
                    to work as a chemist/biochemist until 1994. After her work
                    as a chemist she attended Harvard School of Dental Medicine
                    and graduated Magna Cum Laude in 1998. She then went on to
                    do a year of residency at the University of Washington
                    Hospital where she worked in depth treating medically,
                    mentally, and physically challenged adults and children in
                    the operating room and in an emergency room setting.
                  </Typography>
                </Grid>
                <Grid item xs container>
                  <Grid item xs={4}>
                    <Box height={100}>
                      <Image src="home/harvard.png" size="contain" />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box height={100}>
                      <Image src="home/uofw.png" size="contain" />
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box height={100}>
                      <Image src="home/mount.png" size="contain" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default Doctors
