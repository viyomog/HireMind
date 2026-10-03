import React from 'react'
import { cn } from '../../lib/utils.js'

export function Button({
  className = '',
  variant = 'default',
  size = 'default',
  children,
  ...props
}) {
  const baseStyles =
    'group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    default: 'bg-[#5b4cf6] text-white hover:bg-[#4d3ee7]',
    outline: 'border-[#eae8f0] bg-white hover:bg-[#f5f4fa] text-[#191729]',
    secondary: 'bg-[#f0efff] text-[#5146bb] hover:bg-[#e4e1fb]',
    ghost: 'hover:bg-[#f5f4fa] text-[#191729]',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    link: 'text-[#5b4cf6] underline-offset-4 hover:underline',
  }

  const sizes = {
    default: 'h-9 px-4 py-2 text-sm',
    sm: 'h-8 px-3 text-xs rounded-md',
    lg: 'h-11 px-6 text-base rounded-xl',
    icon: 'h-9 w-9 p-0',
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
