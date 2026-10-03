import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar.js'
import { Footer } from './Footer.js'
import { useTheme } from '../../context/ThemeContext.js'

export function Layout({ children }) {
  const { isDark } = useTheme()

  return (
    <div
      id="top"
      className={`landing-page min-h-screen overflow-hidden bg-[#fbfbfd] text-[#191729] ${
        isDark ? 'theme-dark' : ''
      }`}
    >
      <Navbar />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  )
}
