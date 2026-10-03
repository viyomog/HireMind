import React from 'react'

function ScoreCard() {
  const breakdown = [
    ['Technical accuracy', 82],
    ['Relevance', 86],
    ['Communication', 74],
    ['Delivery', 71],
    ['Structure', 68],
  ]

  return (
    <div className="rounded-[24px] border border-[#e7e4ff] bg-white p-5 shadow-[0_16px_40px_rgba(91,76,246,.08)] sm:p-7">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#766bdf]">
            Interview score
          </p>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-[#191729]">
            78<span className="text-lg text-[#9b97b3]"> / 100</span>
          </p>
        </div>
        <div className="grid size-14 place-items-center rounded-full border-[6px] border-[#5b4cf6]/15 border-t-[#5b4cf6] text-xs font-semibold text-[#5b4cf6]">
          78%
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-3">
        {breakdown.map(([label, value]) => (
          <div key={label}>
            <div className="mb-1.5 flex justify-between text-xs">
              <span className="text-[#5b5870]">{label}</span>
              <span className="font-semibold text-[#191729]">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-[#f0eef9]">
              <div
                className="h-full rounded-full bg-[#5b4cf6]"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScorecardSection() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">05 / Your scorecard</p>
          <h2 className="section-title">Know exactly how you performed.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#6d697e]">
            Go beyond a single score. See what worked, what held you back, and the next practice
            that will make the biggest difference.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[#edf9f3] p-4">
              <p className="text-xs font-semibold text-[#32855c]">What went well</p>
              <p className="mt-2 text-sm text-[#4f735f]">✓ Strong technical understanding</p>
              <p className="mt-1 text-sm text-[#4f735f]">✓ Relevant example</p>
            </div>
            <div className="rounded-xl bg-[#fff4e7] p-4">
              <p className="text-xs font-semibold text-[#b26d2a]">What to improve</p>
              <p className="mt-2 text-sm text-[#82613e]">↑ Structure your response</p>
              <p className="mt-1 text-sm text-[#82613e]">↑ Reduce filler words</p>
            </div>
          </div>
        </div>
        <ScoreCard />
      </div>
    </section>
  )
}
