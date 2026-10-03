import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Logo } from '../common/Logo.js'
import { ButtonLink } from '../common/ButtonLink.js'
import { useTheme } from '../../context/ThemeContext.js'
import { useAuth } from '../../context/AuthContext.js'

export const navLinks = [
  { label: 'Features', href: '/#resume-ai' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'AI Interview', href: '/#ai-interview' },
  { label: 'Resume AI', href: '/#resume-ai' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const location = useLocation()

  const handleNavClick = (e, href) => {
    setMenuOpen(false)
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '')
      if (location.pathname === '/') {
        e.preventDefault()
        const targetElement = document.querySelector(hash)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#ecebf5] bg-[#ffffff]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-[#6d697e] transition-colors hover:text-[#191729]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
            className="theme-toggle"
            title={isDark ? 'Light theme' : 'Dark theme'}
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#e4e2ec] bg-white px-3 py-1 text-xs font-semibold text-[#191729] shadow-xs">
                <span className="inline-block size-2 rounded-full bg-emerald-500" />
                <span>{user.name}</span>
              </div>
              <button
                type="button"
                onClick={logout}
                className="text-sm font-medium text-[#6d697e] transition-colors hover:text-red-500"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-[#6d697e] transition-colors hover:text-[#191729]"
              >
                Log in
              </Link>
              <ButtonLink href="/signup">Get started</ButtonLink>
            </>
          )}
        </div>

        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-[#191729] transition-transform active:scale-95 md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={`mobile-menu-grid md:hidden ${menuOpen ? 'is-open' : ''}`}>
        <div className="overflow-hidden border-t border-[#e9e7f0] bg-[#fbfbfd]">
          <div className="mobile-menu-content px-5 py-5">
            <nav className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-[#191729] transition-colors hover:text-[#5b4cf6]"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-[#e9e7f0] pt-4">
                <div className="flex items-center justify-between pb-3">
                  <span className="text-xs font-medium text-[#6d697e]">Appearance</span>
                  <button
                    type="button"
                    aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                    onClick={toggleTheme}
                    className="theme-toggle"
                  >
                    {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
                  </button>
                </div>

                {user ? (
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-block size-2 rounded-full bg-emerald-500" />
                      <span className="text-sm font-semibold text-[#191729]">{user.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setMenuOpen(false)
                        logout()
                      }}
                      className="text-sm font-medium text-red-500"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between pt-2">
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-medium text-[#6d697e] transition-colors hover:text-[#191729]"
                    >
                      Log in
                    </Link>
                    <ButtonLink href="/signup" onClick={() => setMenuOpen(false)}>
                      Get started
                    </ButtonLink>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
