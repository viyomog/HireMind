import React from 'react'
import { BrainCircuit, Mic, FileText } from 'lucide-react'

export function MockInterviewSection() {
  const interviewTypes = ['Technical', 'Behavioral', 'System design', 'Project deep dive']

  return (
    <section id="ai-interview" className="bg-[#191729] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-[#a6a0ff]">02 / AI mock interview</p>
            <h2 className="section-title text-white">
              Practice the interview before it becomes real.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/55">
              Technical, behavioral, HR, leadership, system design, frontend, and ML interviews
              built around the role you want.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {interviewTypes.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-[#25223b] p-5 sm:p-8">
            <div className="flex items-center justify-between text-xs text-white/45">
              <span>Question 04 / 10</span>
              <span>04:32 elapsed</span>
            </div>
            <div className="mt-8 flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#5b4cf6]">
                <BrainCircuit className="size-5" />
              </span>
              <div>
                <p className="text-xs text-[#a6a0ff]">AI Interviewer</p>
                <p className="mt-2 max-w-xl text-xl leading-8 text-white">
                  Tell me about a technical challenge you faced while building your project.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <button
                  aria-label="Start recording"
                  className="grid size-11 place-items-center rounded-full bg-[#5b4cf6] transition hover:bg-[#6e60ff]"
                >
                  <Mic className="size-5" />
                </button>
                <div>
                  <p className="text-sm font-medium">Ready when you are</p>
                  <p className="text-xs text-white/40">Your answer will be transcribed</p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-white/70 hover:bg-white/5">
                <FileText className="size-4" /> Answer with text
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
