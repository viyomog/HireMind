import React from 'react'
import { Users } from 'lucide-react'

export function TargetAudienceSection() {
  const personas = [
    ['Students', 'Prepare for campus placements and first interviews.'],
    ['Fresh graduates', 'Build confidence and communicate technical experience.'],
    ['Developers & engineers', 'Practice technical, system design, and project interviews.'],
    ['Career changers', 'Prepare for interviews in a new role or industry.'],
    ['Experienced professionals', 'Stress-test answers and find areas to improve.'],
  ]

  return (
    <section className="bg-[#f1f0ff] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Built for your next move</p>
          <h2 className="section-title">One coach for every chapter of your career.</h2>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {personas.map(([title, body]) => (
            <div className="rounded-2xl border border-[#dfdcff] bg-white p-5" key={title}>
              <Users className="size-5 text-[#5b4cf6]" />
              <h3 className="mt-8 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#777287]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
