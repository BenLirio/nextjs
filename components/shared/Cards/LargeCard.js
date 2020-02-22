import React from 'react'
import { Card } from '@material-ui/core'

const LargeCard = ({ children }) => {
  return <Card variant="outlined">{children}</Card>
}

export default LargeCard
