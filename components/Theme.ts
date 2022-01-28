import { ThemeUIContextValue } from 'theme-ui'
import { Theme } from 'theme-ui'


interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme
}

export const useTheme = (useThemeUI as unknown) as () => ExactContextValue

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
  colors: {
    background: 'white',
    text: 'black',
    blue: {
      light: '#187abf',
      dark: '#235a97',
    },
  },
})

export type ExactTheme = typeof theme
