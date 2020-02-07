import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { VariableSizeList } from 'react-window'
import renderRow from './RenderRow'
import WidgetHeader from './WidgetHeader'

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
  }
}))

const Widget = ({ stats, reviews }) => {
  // count is the number shown
  // itemSize is the height of each one
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <WidgetHeader stats={stats} />
        <VariableSizeList
          height={400}
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

export default Widget
