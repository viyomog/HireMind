import React from 'react'
import { Logo } from '../common/Logo.js'

export const footerSections = [
  {
    heading: 'Product',
    links: [
      { label: 'AI Interview', href: '/#ai-interview' },
      { label: 'Resume AI', href: '/#resume-ai' },
      { label: 'Skill Gap Analysis', href: '/#resume-ai' },
      { label: 'Speech Analytics', href: '/#ai-interview' },
      { label: 'Career Roadmap', href: '/#how-it-works' },
      { label: 'Progress Tracking', href: '/#how-it-works' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Interview Guides', href: '#guides' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[#eae8f0] bg-white px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#777287]">
            Your AI-powered career readiness coach.
          </p>
        </div>
        {footerSections.map(({ heading, links }) => (
          <div key={heading}>
            <p className="text-sm font-semibold">{heading}</p>
            <div className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#777287] transition-colors hover:text-[#5b4cf6]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-[#eae8f0] pt-6 text-xs text-[#9894a5] sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 HireMind. Built for better interviews.</span>
        <span>Practice with purpose.</span>
      </div>
    </footer>
  )
}
