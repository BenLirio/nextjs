import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  full: {
    gridColumn: 'full-start / full-end'
  },
  center: {
    gridColumn: 'center-start / center-end'
  }
}))

const Section = props => {
  const { sizes } = useTheme()
  const classes = useStyles()
  const size = sizes[props.variant || 'static'][props.height || 2]
  const classSize = classes[props.width || 'center']
  return (
    <div
      {...props}
      style={{ height: size }}
      className={clsx(classSize, props.className)}
    ></div>
  )
}

export default Section
