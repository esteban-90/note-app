import { useEffect, useState } from 'react'

export default function useThemes() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark')

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const changeTheme = () => {
    setTheme((value) => (value === 'dark' ? 'light' : 'dark'))
  }

  return { theme, change: changeTheme }
}
