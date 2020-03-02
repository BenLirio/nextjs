import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core'

const doctors = ['Dr. Ona', 'Dr. Blunt', 'Dr. XYX']

const AboutDoctors = () => {
  return (
    <>
      <Typography variant="h3">The Doctors</Typography>
      <Grid item xs={12} container>
        <Grid item xs={4}>
          <List>
            {doctors.map(doctor => {
              return (
                <ListItem button>
                  <ListItemText>{doctor}</ListItemText>
                </ListItem>
              )
            })}
          </List>
        </Grid>
        <Grid item xs={8}>
          <Card>
            <CardHeader title="Doctor Name" />
            <CardContent>
              DOCTOR DESCRIPTION(50-150w) Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi qui officia sint consequatur eveniet dolor
              dolore veritatis ipsum quis dolores sit, vero fugiat cum
              necessitatibus in nostrum odit, earum cupiditate, pariatur quae
              laborum! Maiores, adipisci? Assumenda veritatis repudiandae
              pariatur commodi corporis repellat voluptatibus iure inventore
              harum blanditiis quis, perferendis dolorem, quae sit doloremque?
              Deleniti tempora optio et facere, ut temporibus, quo mollitia
              aliquam minima sequi accusamus cumque sint commodi enim modi
              explicabo ipsam dignissimos minus, iste suscipit incidunt.
              Aperiam, doloremque delectus ducimus quam dolores labore,
              molestiae voluptatum corrupti laborum repellat possimus non.
              Quibusdam alias recusandae debitis natus voluptates, adipisci modi
              est quaerat maiores totam fuga accusantium nobis consequatur quod,
              deleniti exercitationem unde minima commodi, quas fugit nostrum
              mollitia facere! Animi nesciunt facilis labore ipsa commodi iusto
              ducimus ut modi eveniet soluta perferendis.
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default AboutDoctors
