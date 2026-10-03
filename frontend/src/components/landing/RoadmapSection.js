import React from 'react'
import { Check, BarChart3 } from 'lucide-react'

export function RoadmapSection() {
  const roadmapItems = [
    ['Day 01', 'Resume fundamentals', true],
    ['Day 02', 'Communication practice', true],
    ['Day 03', 'System design', false],
    ['Day 04', 'Redis deep dive', false],
    ['Day 05', 'Behavioral questions', false],
    ['Day 14', 'Final mock interview', false],
  ]

  const scores = [50, 60, 68, 74, 82]

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Your improvement plan</p>
            <h2 className="section-title">Turn interview feedback into a plan.</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#6d697e]">
              Your weaknesses become daily actions in a focused 14-day roadmap tailored to the
              interview you're preparing for.
            </p>
            <div className="mt-8 rounded-2xl border border-[#eae8f0] bg-white p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Backend Developer roadmap</p>
                <span className="text-xs text-[#5b4cf6]">Day 3 of 14</span>
              </div>
              <div className="mt-5 h-2 rounded-full bg-[#eeecf8]">
                <div className="h-full w-[21%] rounded-full bg-[#5b4cf6]" />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                {roadmapItems.map(([day, title, done]) => (
                  <div key={day} className="flex items-center gap-3 text-sm">
                    <span
                      className={`grid size-6 place-items-center rounded-full ${
                        done
                          ? 'bg-[#73e0ae] text-white'
                          : 'border border-[#dcd9e8] text-[#aaa5bb]'
                      }`}
                    >
                      {done ? (
                        <Check className="size-3.5" />
                      ) : (
                        <span className="size-1.5 rounded-full bg-current" />
                      )}
                    </span>
                    <span className={done ? 'text-[#8a8699] line-through' : 'font-medium'}>
                      {day} — {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[24px] bg-[#f1f0ff] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow">Progress tracking</p>
                <h3 className="mt-2 text-2xl font-semibold">See yourself getting better.</h3>
              </div>
              <BarChart3 className="size-6 text-[#5b4cf6]" />
            </div>
            <div className="mt-10 flex items-end gap-2 sm:gap-4">
              {scores.map((score, i) => (
                <div className="flex flex-1 flex-col items-center gap-2" key={score}>
                  <span className="text-xs font-semibold text-[#5b4cf6]">{score}</span>
                  <div className="flex h-36 w-full items-end rounded-t-lg bg-[#e4e1fb]">
                    <div
                      className="w-full rounded-t-lg bg-[#5b4cf6]"
                      style={{ height: `${score}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-[#8a8699]">Int {i + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-[#6d697e]">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#5b4cf6]" />
                Interview score
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#73e0ae]" />
                Communication
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
