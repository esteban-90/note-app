import { createContext } from 'react'
import { element } from 'prop-types'
import { useThemes } from '@/hooks'

export const themeContext = createContext()

export function ThemeContext({ children }) {
  const { theme, change } = useThemes()
  const { Provider } = themeContext

  return <Provider value={{ theme, change }}>{children}</Provider>
}

ThemeContext.propTypes = {
  children: element.isRequired,
}
