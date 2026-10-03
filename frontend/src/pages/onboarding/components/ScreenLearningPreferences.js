import React from "react";
import { Clock, BookOpen, Brain, Sparkles, Check, Flame, MessageSquareQuote } from "lucide-react";

export function ScreenLearningPreferences({ preferences = {}, onChange }) {
  const prepTimes = [
    { id: "15-30 min", label: "15–30 min", desc: "Quick daily bite" },
    { id: "30-60 min", label: "30–60 min", desc: "Steady progress" },
    { id: "1-2 hours", label: "1–2 hours", desc: "Intensive training" },
    { id: "2+ hours", label: "2+ hours", desc: "All-in bootcamp" },
  ];

  const learningStyles = [
    { id: "Practice questions", label: "Practice Questions", icon: "⚡" },
    { id: "Video courses", label: "Video Courses", icon: "🎥" },
    { id: "Documentation", label: "Documentation", icon: "📑" },
    { id: "Projects", label: "Hands-on Projects", icon: "🛠️" },
    { id: "Reading", label: "Reading & Articles", icon: "📖" },
    { id: "AI explanations", label: "AI Explanations", icon: "🤖" },
    { id: "Mixed", label: "Mixed / Balanced", icon: "🌟" },
  ];

  const feedbackStyles = [
    {
      id: "Quick & direct",
      label: "Quick & Direct",
      desc: "Fast, punchy pointers highlighting right vs wrong instantly.",
      icon: "⚡",
    },
    {
      id: "Detailed explanation",
      label: "Detailed Explanation",
      desc: "Comprehensive feedback with deep conceptual context and code samples.",
      icon: "🔬",
    },
    {
      id: "Strict interviewer",
      label: "Strict Interviewer",
      desc: "FAANG-level bar, probes edge cases and performance trade-offs rigorously.",
      icon: "👔",
    },
    {
      id: "Encouraging coach",
      label: "Encouraging Coach",
      desc: "Warm and supportive guidance focused on building confidence step-by-step.",
      icon: "🌱",
    },
  ];

  const updateField = (field, val) => {
    onChange({
      ...preferences,
      [field]: val,
    });
  };

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <span>⚙️</span>
        <span>Learning Preferences</span>
      </div>

      <h2 className="onboarding-screen-title">How do you prefer to prepare?</h2>
      <p className="onboarding-screen-desc">
        This shapes HireMind's AI personality and daily preparation rhythm.
      </p>

      {/* Daily Prep Time */}
      <div className="onboarding-sub-section mb-6">
        <label className="onboarding-label flex items-center gap-1.5 mb-2">
          <Clock size={16} className="text-[#6355ff]" />
          <span>Daily Preparation Commitment</span>
        </label>
        <div className="onboarding-timeline-grid">
          {prepTimes.map((t) => {
            const isSelected = preferences.dailyPreparationTime === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => updateField("dailyPreparationTime", t.id)}
                className={`onboarding-timeline-card ${isSelected ? "selected" : ""}`}
              >
                <span className="font-semibold text-sm">{t.label}</span>
                <span className="text-xs text-[#7c7895]">{t.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="onboarding-divider-line" />

      {/* Learning Style */}
      <div className="onboarding-sub-section mb-6">
        <label className="onboarding-label flex items-center gap-1.5 mb-2">
          <BookOpen size={16} className="text-[#0284c7]" />
          <span>Preferred Learning Style</span>
        </label>
        <div className="onboarding-pill-cards-grid">
          {learningStyles.map((s) => {
            const isSelected = preferences.learningStyle === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => updateField("learningStyle", s.id)}
                className={`onboarding-pill-card ${isSelected ? "selected" : ""}`}
              >
                <span className="onboarding-pill-card-icon">{s.icon}</span>
                <span className="onboarding-pill-card-label">{s.label}</span>
                <div className={`onboarding-checkbox-indicator ${isSelected ? "checked" : ""}`}>
                  {isSelected && <Check size={12} strokeWidth={3} className="text-white" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="onboarding-divider-line" />

      {/* Feedback Style */}
      <div className="onboarding-sub-section">
        <label className="onboarding-label flex items-center gap-1.5 mb-2">
          <MessageSquareQuote size={16} className="text-[#10b981]" />
          <span>AI Interviewer Feedback Style</span>
        </label>
        <div className="onboarding-grid-2">
          {feedbackStyles.map((f) => {
            const isSelected = preferences.feedbackStyle === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => updateField("feedbackStyle", f.id)}
                className={`onboarding-card-option ${isSelected ? "selected" : ""}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#f2f0ff] dark:bg-[#272346] flex items-center justify-center text-xl shrink-0">
                  {f.icon}
                </div>
                <div className="onboarding-card-text">
                  <span className="onboarding-card-title">{f.label}</span>
                  <span className="onboarding-card-sub">{f.desc}</span>
                </div>
                <div className={`onboarding-card-indicator ${isSelected ? "checked" : ""}`}>
                  {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}