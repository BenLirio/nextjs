import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  image: ({ src }) => ({
    background: `url('/${src}')`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  })
})

const Image = ({ src }) => {
  const classes = useStyles({ src })
  return <div className={classes.image}></div>
}

export default Image
