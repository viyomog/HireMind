import React from 'react'
import { Sparkles, Mic, Gauge, FileText } from 'lucide-react'
import { ButtonLink } from '../common/ButtonLink.js'

function ProductMockup() {
  return (
    <div className="product-mockup relative mx-auto w-full max-w-[600px] rounded-[24px] border border-white/10 bg-[#191729] p-3 shadow-[0_25px_80px_rgba(25,23,41,.22)] sm:p-4">
      <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3 text-white sm:px-3">
        <div className="flex items-center gap-2 text-xs text-white/55">
          <span className="size-2 rounded-full bg-[#73e0ae]" /> Live interview{' '}
          <span className="text-white/25">/</span> Backend Developer
        </div>
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="grid gap-3 pt-3 md:grid-cols-[1.25fr_.75fr]">
        <div className="rounded-[18px] bg-[#25223b] p-4 sm:p-5">
          <div className="mb-9 flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[.16em] text-[#a6a0d7]">
                Question 04 / 10
              </p>
              <h3 className="mt-3 max-w-[290px] text-base font-medium leading-6 text-white sm:text-lg">
                Why did you choose Redis for your project?
              </h3>
            </div>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/65">
              Technical
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span className="grid size-9 place-items-center rounded-full bg-[#5b4cf6] text-white">
                <Mic className="size-4" />
              </span>
              <span>
                <b className="block font-medium text-white">Recording</b>00:24
              </span>
            </div>
            <div className="flex h-8 items-center gap-0.5">
              {[
                10, 18, 28, 14, 23, 36, 16, 30, 42, 22, 13, 34, 24, 14, 29, 19, 37, 15, 25, 10,
              ].map((h, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-[#8c82ff]"
                  style={{ height: h }}
                />
              ))}
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-white/8 bg-white/5 p-3 text-xs leading-5 text-white/60">
            I selected Redis because we needed fast access to frequently requested data...
          </div>
        </div>
        <div className="rounded-[18px] bg-white/[.07] p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs text-white/55">
            <Gauge className="size-3.5 text-[#a6a0ff]" /> Answer analysis
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-xl font-semibold text-white">126</p>
              <p className="mt-1 text-[10px] text-white/45">WPM</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">3</p>
              <p className="mt-1 text-[10px] text-white/45">Fillers</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white">2</p>
              <p className="mt-1 text-[10px] text-white/45">Pauses</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            {[
              ['Technical accuracy', 82],
              ['Relevance', 86],
              ['Communication', 74],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-1.5 flex justify-between text-[10px] text-white/55">
                  <span>{label}</span>
                  <span className="text-white">{value}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#8c82ff]"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 rounded-xl bg-[#73e0ae]/10 p-2.5 text-[10px] text-[#a9f1ca]">
            <Sparkles className="size-3.5" /> Strong technical reasoning
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative px-5 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:px-8">
      <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#e9e7ff]/60 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.86fr_1.14fr] lg:gap-12">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ddd9ff] bg-white px-3.5 py-2 text-xs font-medium text-[#655bc6]">
            <Sparkles className="size-3.5" /> The complete interview readiness system
          </div>
          <h1 className="max-w-[600px] text-5xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-6xl lg:text-[72px]">
            Your AI coach for the interview <span className="text-[#5b4cf6]">that matters.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-7 text-[#6d697e] sm:text-lg">
            Practice personalized interviews, analyze your resume, improve your communication, and
            build the skills you need to walk into your next interview with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#start">Start free interview</ButtonLink>
            <a
              href="#resume-ai"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dedbe8] bg-white px-5 py-3 text-sm font-semibold text-[#3f3b54] transition hover:border-[#bdb6f6] hover:text-[#5b4cf6]"
            >
              Analyze my resume <FileText className="size-4" />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#858197]">
            <span>Voice interviews</span>
            <span>Adaptive questions</span>
            <span>AI feedback</span>
            <span>Career roadmaps</span>
          </div>
        </div>
        <ProductMockup />
      </div>
    </section>
  )
}
