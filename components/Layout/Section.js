import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  full: {
    gridColumn: 'full-start / full-end'
  },
  center: {
    gridColumn: 'center-start / center-end'
  }
}))

const Section = props => {
  const classes = useStyles()
  const classSize = classes[props.width || 'center']
  return <div {...props} className={clsx(classSize, props.className)}></div>
}

export default Section
