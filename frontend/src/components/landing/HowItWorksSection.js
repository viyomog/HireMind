import React from 'react'
import { Upload, Target, Headphones, TrendingUp } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    [
      '01',
      'Upload your resume',
      'HireMind understands your skills, projects, experience, and background.',
      Upload,
    ],
    [
      '02',
      'Choose your target',
      'Select a role or paste the job description you want to prepare for.',
      Target,
    ],
    [
      '03',
      'Practice with AI',
      'Take a personalized voice or text interview that adapts to you.',
      Headphones,
    ],
    [
      '04',
      'Improve',
      'Get feedback, identify weaknesses, and follow your roadmap.',
      TrendingUp,
    ],
  ]

  return (
    <section id="how-it-works" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="eyebrow">The HireMind loop</p>
          <h2 className="section-title">From resume to ready, with a plan at every step.</h2>
        </div>
        <div className="mt-14 grid gap-3 md:grid-cols-4">
          {steps.map(([num, title, body, Icon]) => (
            <div key={num} className="relative rounded-2xl border border-[#eae8f0] bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#5b4cf6]">{num}</span>
                <Icon className="size-5 text-[#aaa5c0]" />
              </div>
              <h3 className="mt-10 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#777287]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
