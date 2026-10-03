import React from 'react'
import { Mic, Check } from 'lucide-react'

export function VoiceIntelligenceSection() {
  const metrics = [
    ['134', 'WPM'],
    ['4', 'Filler words'],
    ['2', 'Long pauses'],
  ]

  const takeaways = [
    'Live transcript as you speak',
    'Pace, filler word, and pause analysis',
    'Actionable delivery feedback',
  ]

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <div className="order-2 rounded-[24px] border border-[#eae8f0] bg-white p-5 shadow-sm sm:p-7 lg:order-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[#fff0ee] text-[#dc7267]">
                <Mic className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Voice answer</p>
                <p className="text-xs text-[#8a8699]">Recording · 00:32</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-medium text-[#dc7267]">
              <span className="size-2 animate-pulse rounded-full bg-[#dc7267]" /> Live
            </span>
          </div>
          <div className="mt-8 flex h-20 items-center justify-center gap-1 rounded-2xl bg-[#faf9ff]">
            {Array.from({ length: 42 }, (_, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-[#8c82ff]"
                style={{ height: `${12 + ((i * 17) % 45)}%` }}
              />
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-[#f7f6fb] p-4 text-sm leading-6 text-[#68637a]">
            In my project, I decided to use caching because it helped us reduce response times
            significantly and lowered database load under peak traffic...
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {metrics.map(([value, label]) => (
              <div className="rounded-xl border border-[#eeeef5] py-3" key={label}>
                <p className="text-xl font-semibold">{value}</p>
                <p className="mt-1 text-[10px] text-[#8a8699]">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow">03 / Voice intelligence</p>
          <h2 className="section-title">Don't just prepare answers. Practice saying them.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#6d697e]">
            Build the communication muscle that only appears when you say an answer out loud.
            HireMind shows you what your delivery is communicating.
          </p>
          <div className="mt-7 flex flex-col gap-3 text-sm text-[#575267]">
            {takeaways.map((item) => (
              <p className="flex items-center gap-2" key={item}>
                <Check className="size-4 text-[#5b4cf6]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
