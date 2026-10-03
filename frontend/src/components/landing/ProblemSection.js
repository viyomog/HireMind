import React from 'react'

export function ProblemSection() {
  const problems = [
    'Generic questions',
    'No personalized feedback',
    'Unknown skill gaps',
    'Hard to practice aloud',
    'No objective measurement',
    'Repeating the same mistakes',
  ]

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p className="eyebrow">The problem</p>
          <h2 className="section-title">
            Preparing for interviews shouldn't mean guessing what to practice.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-[#6d697e]">
            Generic questions, vague feedback, and no clear plan make it hard to know what will
            actually move you forward.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {problems.map((item) => (
              <div
                className="rounded-xl border border-[#eae8f0] bg-white px-3 py-3 text-sm text-[#575267]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl rounded-2xl bg-[#f0efff] px-6 py-5 text-center text-sm font-semibold text-[#5146bb]">
        HireMind turns all of that into one personalized preparation loop.
      </div>
    </section>
  )
}
