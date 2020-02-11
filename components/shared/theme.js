import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  // Theme colors
  palette: {
    primary: {
      main: '#620064'
    },
    secondary: {
      main: '#8FD468'
    },
    background: {
      default: '#F5F5F5'
    }
  },
  shape: {
    large: {
      borderRadius: 12
    },
    medium: {
      borderRadius: 12
    }
  }
})

export default theme
