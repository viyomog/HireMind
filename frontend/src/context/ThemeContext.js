import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('hiremind-theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('hiremind-theme', isDark ? 'dark' : 'light')
      const root = document.documentElement
      if (isDark) {
        root.classList.add('theme-dark')
        root.classList.add('dark')
        root.style.colorScheme = 'dark'
      } else {
        root.classList.remove('theme-dark')
        root.classList.remove('dark')
        root.style.colorScheme = 'light'
      }
    } catch {}
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
