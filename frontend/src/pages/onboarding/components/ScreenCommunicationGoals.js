import React from "react";
import { Check, Mic, Keyboard, Sparkles, MessageCircle } from "lucide-react";

export function ScreenCommunicationGoals({
  goals = [],
  mode = "Both",
  onGoalsChange,
  onModeChange,
}) {
  const communicationAreas = [
    { id: "Speaking fluency", label: "Speaking Fluency", desc: "Smooth flow, natural phrasing", icon: "💬" },
    { id: "Confidence", label: "Confidence", desc: "Project calm certainty & presence", icon: "🦁" },
    { id: "Answer structure", label: "Answer Structure", desc: "Frameworks like STAR & PREP", icon: "📐" },
    { id: "Conciseness", label: "Conciseness", desc: "Getting straight to the point", icon: "🎯" },
    { id: "Technical explanation", label: "Technical Explanation", desc: "Explaining complex logic simply", icon: "💡" },
    { id: "Vocabulary", label: "Vocabulary", desc: "Using crisp professional terminology", icon: "📚" },
    { id: "Filler words", label: "Eliminating Filler Words", desc: "Reducing 'um', 'like', 'you know'", icon: "✂️" },
    { id: "Speaking speed", label: "Speaking Speed", desc: "Pacing your thoughts evenly", icon: "⏱️" },
    { id: "Long pauses", label: "Long Pauses", desc: "Gracefully taking time to think", icon: "⏳" },
    { id: "Behavioral answers", label: "Behavioral Answers", desc: "Strong storytelling with metrics", icon: "🎭" },
  ];

  const modeOptions = [
    {
      id: "Voice",
      label: "Voice Interview",
      desc: "Practice speaking out loud with real-time speech AI",
      icon: <Mic size={20} className="text-[#6355ff]" />,
      badge: "🎙️ Voice",
    },
    {
      id: "Text",
      label: "Text / Chat",
      desc: "Type responses at your own pace like written technical screens",
      icon: <Keyboard size={20} className="text-[#0284c7]" />,
      badge: "⌨️ Text",
    },
    {
      id: "Both",
      label: "Both Modes",
      desc: "Flexible — switch between voice and text whenever you want",
      icon: <Sparkles size={20} className="text-[#10b981]" />,
      badge: "✨ Recommended",
    },
  ];

  const toggleGoal = (id) => {
    if (goals.includes(id)) {
      onGoalsChange(goals.filter((g) => g !== id));
    } else {
      onGoalsChange([...goals, id]);
    }
  };

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <span>🗣️</span>
        <span>Communication Goals</span>
      </div>

      <h2 className="onboarding-screen-title">What would you like to improve?</h2>
      <p className="onboarding-screen-desc">
        HireMind tracks speech patterns, pauses, tone, and clarity. Select what you'd like to sharpen.
      </p>

      <div className="onboarding-pill-cards-grid">
        {communicationAreas.map((item) => {
          const isSelected = goals.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleGoal(item.id)}
              className={`onboarding-pill-card ${isSelected ? "selected" : ""}`}
            >
              <span className="onboarding-pill-card-icon">{item.icon}</span>
              <div className="text-left flex-1">
                <div className="onboarding-pill-card-label">{item.label}</div>
                <div className="text-[11px] text-[#7c7895]">{item.desc}</div>
              </div>
              <div className={`onboarding-checkbox-indicator ${isSelected ? "checked" : ""}`}>
                {isSelected && <Check size={12} strokeWidth={3} className="text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="onboarding-divider-line" />

      {/* Preferred interview mode */}
      <div className="onboarding-sub-section">
        <h3 className="text-base font-bold text-[#191729] dark:text-[#f8f7ff] mb-2">
          Preferred interview mode
        </h3>
        <p className="text-xs text-[#7c7895] mb-3">
          You can always change this per practice session.
        </p>

        <div className="onboarding-grid-3">
          {modeOptions.map((opt) => {
            const isSelected = mode === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onModeChange(opt.id)}
                className={`onboarding-card-option flex-col text-center p-4 ${isSelected ? "selected" : ""}`}
              >
                <div className="mb-2 p-2 rounded-xl bg-[#f2f0ff] dark:bg-[#25223c] inline-flex">
                  {opt.icon}
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f0efff] dark:bg-[#322d52] text-[#6355ff] mb-1">
                  {opt.badge}
                </span>
                <span className="font-bold text-sm text-[#191729] dark:text-[#f8f7ff]">
                  {opt.label}
                </span>
                <span className="text-xs text-[#7c7895] mt-1">{opt.desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}