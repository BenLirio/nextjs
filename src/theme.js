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
  grid: {
    template: {
      test: {
        [`@media (min-width:${value.xs}${unit})`]: {
          gridTemplateColumns: `[full-start] 0 [center-start] repeat(4, [col-start] 1fr [col-end]) [center-end] 0 [full-end]`,
          gridColumnGap: '1rem'
        },
        [`@media (min-width:${value.sm}${unit})`]: {
          gridTemplateColumns: `[full-start] 1fr [center-start] repeat(4, [col-start] 3fr [col-end]) [center-end] 1fr [full-end]`
        },
        [`@media (min-width:${value.md}${unit})`]: {
          gridTemplateColumns: `[full-start] 1fr [center-start] repeat(6, [col-start] 2fr [col-end]) [center-end] 1fr [full-end]`,
          gridColumnGap: '2rem'
        },
        [`@media (min-width:${value.lg}${unit})`]: {
          gridTemplateColumns: `[full-start] 1fr [center-start] repeat(8, [col-start] 1fr [col-end]) [center-end] 1fr [full-end]`
        },
        [`@media (min-width:${value.xl}${unit})`]: {
          background: '#ff0'
        }
      },
      columns:
        '[full-start] 1fr [center-start] repeat(8, [col-start] 8rem [col-end]) [center-end] 1fr [full-end]'
    }
  }
})

export default theme
