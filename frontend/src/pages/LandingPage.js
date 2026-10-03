import React from 'react'
import {
  HeroSection,
  FeatureStrip,
  ProblemSection,
  ResumeIntelligenceSection,
  HowItWorksSection,
  MockInterviewSection,
  VoiceIntelligenceSection,
  AdaptiveIntelligenceSection,
  ScorecardSection,
  ComparisonSection,
  RoadmapSection,
  TargetAudienceSection,
  FaqSection,
  CtaSection,
} from '../components/landing/index.js'

export function LandingPage() {
  return (
    <div className="landing-content">
      <HeroSection />
      <FeatureStrip />
      <ProblemSection />
      <ResumeIntelligenceSection />
      <HowItWorksSection />
      <MockInterviewSection />
      <VoiceIntelligenceSection />
      <AdaptiveIntelligenceSection />
      <ScorecardSection />
      <ComparisonSection />
      <RoadmapSection />
      <TargetAudienceSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

export default LandingPage
