import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import options from './options.json'
console.log('options', options)
const AnyReactComponent = ({ text }) => (
  <LocationOnIcon
    fontSize="large"
    style={{ transform: 'translate(-50%,-100%)', color: '#ff1744' }}
  />
)

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lng: -85.6159679,
      lat: 42.8841725
    },
    zoom: 11,
    getMapOptions: () => {
      return {
        styles: options,
        fullscreenControl: false
      }
    }
  }
  render() {
    const activate = true
    const key = activate ? 'AIzaSyA2A1xc8sr0OQpnDuwyj0kv4LCSw7jMMlA' : ''
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.props.getMapOptions}
        >
          <AnyReactComponent {...this.props.center} text="My Marker" />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap
