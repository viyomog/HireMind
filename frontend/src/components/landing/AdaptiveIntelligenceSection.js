import React from 'react'
import { Send, Mic, BrainCircuit, Zap, ArrowRight } from 'lucide-react'

export function AdaptiveIntelligenceSection() {
  return (
    <section className="bg-[#f1f0ff] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">04 / Adaptive intelligence</p>
          <h2 className="section-title">The interview adapts to you.</h2>
          <p className="mt-5 text-base leading-7 text-[#6d697e]">
            HireMind doesn't ask a fixed list of questions. Every answer influences what comes next.
          </p>
        </div>
        <div className="mt-14 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          <div className="step-card">
            <span className="card-icon">
              <Send />
            </span>
            <p className="label">Question</p>
            <p className="mt-2 text-sm font-medium">Why did you use Redis?</p>
          </div>
          <ArrowRight className="mx-auto hidden text-[#aaa4d0] md:block" />
          <div className="step-card">
            <span className="card-icon">
              <Mic />
            </span>
            <p className="label">Candidate answer</p>
            <p className="mt-2 text-sm font-medium">
              We used it for caching frequently accessed data.
            </p>
          </div>
          <ArrowRight className="mx-auto hidden text-[#aaa4d0] md:block" />
          <div className="step-card">
            <span className="card-icon">
              <BrainCircuit />
            </span>
            <p className="label">AI analysis</p>
            <p className="mt-2 text-sm font-medium">
              Strong fundamentals. Needs more scalability reasoning.
            </p>
          </div>
          <ArrowRight className="mx-auto hidden text-[#aaa4d0] md:block" />
          <div className="step-card border-[#bdb6f6] bg-white">
            <span className="card-icon">
              <Zap />
            </span>
            <p className="label">Follow-up</p>
            <p className="mt-2 text-sm font-medium">
              How would your architecture change at 10× traffic?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
