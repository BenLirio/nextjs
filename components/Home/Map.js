import React from 'react'
import { Box, Typography } from '@material-ui/core'

const Map = () => {
  const width = 400
  const height = 400
  const zoom = 14
  const key = 'AIzaSyA2A1xc8sr0OQpnDuwyj0kv4LCSw7jMMlA'
  const center = 'Berkeley,CA'
  return (
    <img
    // src={`https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${zoom}&size=${width}x${height}&key=${key}&markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222`}
    ></img>
  )
}

export default Map
