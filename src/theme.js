import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  grid: {
    template: {
      columns:
        '[full-start] 1fr [center-start] repeat(8, [col-start] 8rem [col-end]) [center-end] 1fr [full-end]'
    }
  }
})

export default theme
