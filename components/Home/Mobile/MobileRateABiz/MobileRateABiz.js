import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  CardActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Divider
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import clsx from 'clsx'
import MobileRateABizHeader from './MobileRateABizHeader'
import MobileRateABizExpandedList from './MobileRateABizExpandedList'

const useStyles = makeStyles(theme => ({
  expander: {
    margin: 'auto',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expanded: {
    transform: 'rotate(180deg)'
  }
}))

const MobileRateABiz = ({ stats, reviews }) => {
  const [expanded, setExpanded] = useState(false)

  const classes = useStyles()
  const onExpandClicked = () => {
    setExpanded(!expanded)
  }
  return (
    <Card>
      <MobileRateABizHeader stats={stats} />
      <Divider />
      <CardActions>
        <IconButton
          className={clsx(classes.expander, { [classes.expanded]: expanded })}
          onClick={onExpandClicked}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <MobileRateABizExpandedList expanded={expanded} reviews={reviews} />
    </Card>
  )
}

export default MobileRateABiz
