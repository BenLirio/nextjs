import React from 'react'
import { Card } from '@material-ui/core'

const SmallCard = ({ children }) => {
  return <Card variant="outlined">{children}</Card>
}

export default SmallCard
