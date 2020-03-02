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

const teams = ['Front Desk', 'Nurses', 'Other members']

const AboutTeam = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3">The Teams</Typography>
      </Grid>

      <Grid item xs={4}>
        <List>
          {teams.map(team => {
            return (
              <ListItem button>
                <ListItemText>{team}</ListItemText>
              </ListItem>
            )
          })}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Card>
          <CardHeader title="Team Name" />
          <CardContent>
            DOCTOR DESCRIPTION(50-150w) Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolore eligendi alias, enim fugiat rem
            exercitationem, expedita libero quasi eaque ut ratione distinctio!
            At illo sequi voluptatum in nisi adipisci consequuntur quo, mollitia
            culpa neque dolorum impedit nostrum repellat quasi tenetur accusamus
            reiciendis voluptas dignissimos recusandae iure praesentium! Quod
            harum cum rem dolorem quo provident excepturi aspernatur sapiente
            eveniet ullam deleniti consequuntur deserunt consequatur, ducimus
            officiis cupiditate necessitatibus ipsam maiores tenetur explicabo
            vel illum inventore. Aperiam, eligendi soluta? Totam, reprehenderit
            voluptatibus.
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default AboutTeam
