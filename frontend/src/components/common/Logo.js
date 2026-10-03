import React from 'react'
import { Link } from 'react-router-dom'

export function Logo({ className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`flex items-center gap-2.5 font-semibold tracking-tight ${className}`}
    >
      <img
        src="/logo.png"
        alt="HireMind"
        className="size-8 rounded-[10px] object-contain shadow-[0_6px_16px_rgba(91,76,246,.25)]"
      />
      <span className="text-[17px]">
        Hire<span className="text-[#5b4cf6]">Mind</span>
      </span>
    </Link>
  )
}
