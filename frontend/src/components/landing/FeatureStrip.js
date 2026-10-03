import React from 'react'
import { FileText, BrainCircuit, Mic, Zap, Target, Route } from 'lucide-react'

export function FeatureStrip() {
  const features = [
    ['Resume intelligence', FileText],
    ['AI mock interviews', BrainCircuit],
    ['Voice analysis', Mic],
    ['Adaptive questions', Zap],
    ['Personalized feedback', Target],
    ['Career roadmaps', Route],
  ]

  return (
    <section className="border-y border-[#eae8f0] bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
        <p className="text-sm font-semibold text-[#3c3850]">
          Everything you need to become interview-ready.
        </p>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-[#777287]">
          {features.map(([label, Icon]) => (
            <span className="flex items-center gap-2" key={label}>
              <Icon className="size-3.5 text-[#766bdf]" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
