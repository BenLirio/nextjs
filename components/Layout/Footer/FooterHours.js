import React from 'react'
import { Typography } from '@material-ui/core'
import hours from '../../../js/about/hours'

const FooterHours = () => {
  return (
    <>
      <Typography variant="h6">Hours</Typography>
      {hours.map(day => {
        return (
          <Typography key={day.name} variant="subtitle2" color="textSecondary">
            {day.name}: {day.hours}
          </Typography>
        )
      })}
    </>
  )
}

export default FooterHours
