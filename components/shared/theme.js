import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const value = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}
const unit = 'px'
const step = 5

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#620064'
    },
    secondary: {
      main: '#8FD468'
    }
  },
  sizes: {
    static: {
      [1]: '100px',
      [2]: '250px',
      [3]: '300px',
      [4]: '500px'
    },
    responsive: {
      [1]: '10vw',
      [2]: '20vw',
      [3]: '35vw',
      [4]: '50vw'
    },
    percent: {
      [1]: '10vh',
      [2]: '30vh',
      [3]: '50vh',
      [4]: '70vh'
    }
  }
})

export default theme
