import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function ButtonLink({
  children,
  dark = false,
  href = '#start',
  className = '',
  onClick,
  ...props
}) {
  const baseClasses = `group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
    dark
      ? 'bg-[#191729] text-white shadow-lg shadow-[#191729]/15 hover:bg-[#2a2740]'
      : 'bg-[#5b4cf6] text-white shadow-lg shadow-[#5b4cf6]/20 hover:bg-[#4d3ee7]'
  }`

  const isInternal = href.startsWith('/')

  if (isInternal) {
    return (
      <Link to={href} onClick={onClick} className={`${baseClasses} ${className}`} {...props}>
        {children}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    )
  }

  return (
    <a href={href} onClick={onClick} className={`${baseClasses} ${className}`} {...props}>
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}
