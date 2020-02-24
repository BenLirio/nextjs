import React from 'react'
import { Typography, Button } from '@material-ui/core'

const ServiceCta = () => {
  return (
    <div style={{ display: 'flex', marginTop: '24px', marginBottom: '24px' }}>
      <div>
        <Typography variant="h4">Have more questions?</Typography>
        <Typography variant="subtitle1">Feel free to call</Typography>
      </div>
      <div style={{ flex: '1' }}></div>
      <div>
        <Button>(123) 456 789</Button>
      </div>
    </div>
  )
}

export default ServiceCta
