import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  image: ({ src, size }) => ({
    background: `url('/${src}')`,
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: size,
    backgroundRepeat: 'no-repeat'
  })
})

const Image = ({ src, size = 'cover' }) => {
  const classes = useStyles({ src, size })
  return <div className={classes.image}></div>
}

export default Image
