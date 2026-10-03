import React from 'react'
import { FileText } from 'lucide-react'
import { ButtonLink } from '../common/ButtonLink.js'

export function CtaSection() {
  return (
    <section id="start" className="px-5 pb-24 lg:px-8">
      <div className="cta-shell relative isolate mx-auto max-w-7xl overflow-hidden rounded-[32px] px-6 py-16 text-center text-white shadow-[0_30px_100px_rgba(91,76,246,.3)] sm:px-10 sm:py-20">
        <div className="cta-grid absolute inset-0 -z-10 opacity-30" />
        <div className="cta-orb cta-orb-one absolute -left-24 -top-24 -z-10 size-72 rounded-full bg-[#9c8cff] blur-3xl" />
        <div className="cta-orb cta-orb-two absolute -bottom-32 -right-16 -z-10 size-80 rounded-full bg-[#26d8c0] blur-3xl opacity-30" />
        <span className="cta-float cta-float-one absolute left-[8%] top-[22%] hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left backdrop-blur-md sm:block">
          <span className="block text-[10px] uppercase tracking-[.16em] text-white/55">
            Interview score
          </span>
          <span className="mt-1 block text-xl font-semibold">
            78 <span className="text-xs text-[#a9f1ca]">+12%</span>
          </span>
        </span>
        <span className="cta-float cta-float-two absolute right-[8%] top-[24%] hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left backdrop-blur-md sm:block">
          <span className="block text-[10px] uppercase tracking-[.16em] text-white/55">
            Daily streak
          </span>
          <span className="mt-1 block text-xl font-semibold">04 days</span>
        </span>
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-white/60">
            Your next interview starts here.
          </p>
          <h2 className="cta-title mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl">
            Practice. Measure. <span className="text-[#c9c3ff]">Improve.</span> Repeat.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-white/70">
            Build the confidence that comes from knowing exactly what to work on next.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink dark href="#top">
              Start your free interview
            </ButtonLink>
            <a
              href="#resume-ai"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
            >
              Analyze my resume{' '}
              <FileText className="size-4 transition-transform group-hover:translate-y-[-2px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
