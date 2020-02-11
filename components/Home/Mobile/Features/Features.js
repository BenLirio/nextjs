import React from 'react'
import { List } from '@material-ui/core'

import FeatureListItem from './FeatureListItem'

const MobileFeatures = () => {
  return (
    <List>
      <FeatureListItem
        title="We Love our patients"
        secondary="We provide the dental care you deserve"
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
        secondary="Cosmetic, Preventative, and more"
        icon="assignment"
      />
    </List>
  )
}

export default MobileFeatures
