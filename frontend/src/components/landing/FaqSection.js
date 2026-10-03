import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const faqs = [
  [
    'What is HireMind?',
    'HireMind is an AI-powered career readiness coach that connects your resume and target role to a personalized interview practice loop.',
  ],
  [
    'How does the AI mock interview work?',
    'Upload your resume, choose a role, and HireMind builds a realistic voice or text interview around your experience and the skills the role asks for.',
  ],
  [
    'Can I practice using my voice?',
    'Yes. Voice practice includes a live transcript plus pace, filler word, pause, and delivery analysis.',
  ],
  [
    'Can HireMind analyze my resume?',
    'Yes. HireMind extracts your skills, projects, experience, education, and certifications, then highlights strengths and gaps.',
  ],
  [
    'Can I provide a job description?',
    'Absolutely. Add a job description to make your questions, gap analysis, and improvement roadmap specific to the opportunity.',
  ],
  [
    'How does adaptive questioning work?',
    'Each answer is evaluated before the next question is selected, so follow-ups can test depth, clarify trade-offs, or probe weak spots.',
  ],
  [
    'What does HireMind evaluate?',
    'Technical accuracy, relevance, communication, delivery, structure, speaking pace, filler words, and pauses.',
  ],
  [
    'Can I track my progress?',
    'Yes. Interview history and score trends help you see how your technical and communication skills improve over time.',
  ],
  [
    'What is the 14-day roadmap?',
    'It is a focused practice plan generated from your interview feedback, with daily activities that target your highest-impact gaps.',
  ],
  [
    'Can I practice both technical and HR interviews?',
    'Yes. Choose technical, behavioral, HR, leadership, system design, frontend, or ML interview modes.',
  ],
]

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section id="faq" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="eyebrow">Questions, answered</p>
          <h2 className="section-title">Everything you need to know.</h2>
        </div>
        <div className="mt-12 divide-y divide-[#eae8f0] border-y border-[#eae8f0]">
          {faqs.map(([question, answer], i) => {
            const isOpen = openFaq === i
            return (
              <div key={question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold"
                >
                  <span className="transition-colors duration-300 group-hover:text-[#5b4cf6]">
                    {question}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-[#aaa5bb] transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-[#5b4cf6]' : ''
                    }`}
                  />
                </button>
                <div className="faq-answer-grid">
                  <div className="min-h-0">
                    <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-[#777287]">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
