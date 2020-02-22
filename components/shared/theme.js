import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  // Theme colors
  typography: {
    fontFamily: '"Muli", sans-serif',
    h1: {
      fontWeight: 500
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif'
    }
  },
  palette: {
    primary: {
      main: '#620064'
    },
    secondary: {
      main: '#ff1744'
    },
    background: {
      default: '#FAFAFA',
      offset: '#E3E5E3'
    }
  },
  shape: {
    large: {
      borderRadius: 24
    },
    medium: {
      borderRadius: 12
    },
    small: {
      borderRadius: 12
    }
  }
})

export default theme
