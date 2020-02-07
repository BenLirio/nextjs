import React from 'react'
import { List } from '@material-ui/core'

import FeatureListItem from './FeatureListItem'

const MobileFeatures = () => {
  return (
    <List>
      <FeatureListItem
        title="We Love our patients"
        secondary="Quality and comfortable care"
        icon="favorite"
        divider
      />
      <FeatureListItem
        title="Timely service"
        secondary="Your time is valuable, we respect that"
        icon="restore"
        divider
      />
      <FeatureListItem
        title="Our Services"
        secondary="Browse our services for more information"
        icon="assignment"
      />
    </List>
  )
}

export default MobileFeatures
