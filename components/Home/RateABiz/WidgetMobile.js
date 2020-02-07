import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  IconButton
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { VariableSizeList } from 'react-window'
import renderRow from './RenderRow'
import WidgetHeader from './WidgetHeader'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minWidth: 'fit-content',
    marginLeft: 'auto'
  },
  header: {
    background: theme.palette.background.paper
  },
  list: {
    background: theme.palette.background.default,
    borderWidth: '3px',
    borderColor: theme.palette.grey[300],
    borderStyle: 'solid'
  },
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

const WidgetMobile = ({ stats, reviews }) => {
  // count is the number shown
  // itemSize is the height of each one
  const [height, setHeight] = useState(0)
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    setHeight(expanded ? 400 : 0)
  }, [expanded])
  const onExpandClicked = () => {
    setExpanded(!expanded)
  }
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <WidgetHeader stats={stats} />
      <CardContent>
        <div style={{ width: '100%', display: 'flex' }}>
          <IconButton
            className={clsx(classes.expander, { [classes.expanded]: expanded })}
            onClick={onExpandClicked}
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>
        <VariableSizeList
          height={height}
          width="100%"
          itemSize={i => reviews[i].height}
          itemCount={reviews.length}
          className={classes.list}
        >
          {({ index, style }) => renderRow({ style, review: reviews[index] })}
        </VariableSizeList>
      </CardContent>
    </Card>
  )
}

export default WidgetMobile
