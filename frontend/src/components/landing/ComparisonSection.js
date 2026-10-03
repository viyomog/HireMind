import React from 'react'
import { Check } from 'lucide-react'

export function ComparisonSection() {
  const comparisonData = [
    [
      'Traditional prep',
      [
        'Generic questions',
        'Manual feedback',
        'No consistent scoring',
        'Hard to track progress',
      ],
    ],
    [
      'HireMind',
      [
        'Resume-aware questions',
        'AI-powered evaluation',
        'Adaptive follow-ups',
        '14-day improvement plans',
      ],
    ],
  ]

  return (
    <section className="bg-[#191729] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-[#a6a0ff]">Why HireMind</p>
            <h2 className="section-title text-white">
              Traditional preparation gives you questions. HireMind gives you a feedback loop.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {comparisonData.map(([title, items], i) => (
              <div
                className={`rounded-2xl p-6 ${i ? 'bg-[#5b4cf6]' : 'bg-white/8'}`}
                key={title}
              >
                <p className="font-semibold">{title}</p>
                <div className="mt-5 flex flex-col gap-3">
                  {items.map((item) => (
                    <p key={item} className="flex gap-2 text-sm text-white/65">
                      <Check className="size-4 shrink-0 text-[#a6a0ff]" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
