import React from 'react'
import { FileText, Check, Plus, ArrowRight } from 'lucide-react'
import { ButtonLink } from '../common/ButtonLink.js'

export function ResumeIntelligenceSection() {
  const matchedSkills = ['JavaScript', 'React', 'Node.js', 'MongoDB']
  const skillGaps = ['System Design', 'Redis', 'AWS']

  return (
    <section id="resume-ai" className="bg-[#f1f0ff] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow">01 / Resume intelligence</p>
          <h2 className="section-title">Start with what recruiters actually see.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#6d697e]">
            HireMind turns your resume into an AI profile — understanding your strengths,
            evidence, and the gaps between your experience and the role you want.
          </p>
          <div className="mt-8">
            <ButtonLink href="#start">Analyze your resume</ButtonLink>
          </div>
        </div>
        <div className="rounded-[24px] border border-[#dfdcff] bg-white p-5 shadow-[0_20px_60px_rgba(91,76,246,.1)] sm:p-7">
          <div className="flex items-center justify-between border-b border-[#eeeef5] pb-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[#eeecff] text-[#5b4cf6]">
                <FileText className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Resume match</p>
                <p className="text-xs text-[#8a8699]">Backend Developer · Updated just now</p>
              </div>
            </div>
            <p className="text-3xl font-semibold text-[#5b4cf6]">84%</p>
          </div>
          <div className="grid gap-7 pt-6 sm:grid-cols-2">
            <div>
              <p className="label">Matched skills</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {matchedSkills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#edf9f3] px-2.5 py-1.5 text-xs text-[#32855c]"
                  >
                    <Check className="size-3" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="label">Skill gaps</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillGaps.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#fff4e7] px-2.5 py-1.5 text-xs text-[#b26d2a]"
                  >
                    <Plus className="size-3" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-7 rounded-xl bg-[#fafafd] p-4">
            <p className="label">Resume insights</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-[#575267]">
              <p className="flex gap-2">
                <Check className="mt-0.5 size-4 text-[#55ad7c]" />
                Strong project experience
              </p>
              <p className="flex gap-2">
                <ArrowRight className="mt-0.5 size-4 text-[#9b95b8]" />
                Missing measurable achievements
              </p>
              <p className="flex gap-2">
                <ArrowRight className="mt-0.5 size-4 text-[#9b95b8]" />
                Weak system-design evidence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
