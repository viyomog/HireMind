import React from "react";
import { Check, Frown, Meh, Smile, Sparkles, AlertCircle } from "lucide-react";

export function ScreenInterviewExperience({
  experience = { level: 3, previousInterviews: "Never", challenges: [] },
  onChange,
}) {
  const previousOptions = [
    { id: "Never", label: "Never", desc: "First time preparing" },
    { id: "Once or twice", label: "Once or twice", desc: "A little practice" },
    { id: "Several times", label: "Several times", desc: "Moderate exposure" },
    { id: "Frequently", label: "Frequently", desc: "Extensive experience" },
  ];

  const challengeOptions = [
    { id: "Getting nervous", label: "Getting nervous", icon: "😰" },
    { id: "Speaking clearly", label: "Speaking clearly", icon: "🗣️" },
    { id: "Explaining projects", label: "Explaining projects", icon: "📑" },
    { id: "Technical questions", label: "Technical questions", icon: "💻" },
    { id: "Coding", label: "Coding on the spot", icon: "⚡" },
    { id: "System design", label: "System design", icon: "🏗️" },
    { id: "HR questions", label: "HR & behavioral", icon: "🤝" },
    { id: "Thinking under pressure", label: "Thinking under pressure", icon: "🧠" },
    { id: "Lack of confidence", label: "Lack of confidence", icon: "🛡️" },
    { id: "Don't know yet", label: "Don't know yet", icon: "❓" },
  ];

  const comfortLabels = [
    "Never interviewed / Anxious",
    "A bit nervous",
    "Somewhat comfortable",
    "Confident",
    "Very confident / Veteran",
  ];

  const updateField = (field, val) => {
    onChange({
      ...experience,
      [field]: val,
    });
  };

  const toggleChallenge = (id) => {
    const current = experience.challenges || [];
    if (id === "Don't know yet") {
      updateField("challenges", current.includes(id) ? [] : [id]);
      return;
    }
    const filtered = current.filter((c) => c !== "Don't know yet");
    if (filtered.includes(id)) {
      updateField("challenges", filtered.filter((c) => c !== id));
    } else {
      updateField("challenges", [...filtered, id]);
    }
  };

  const currentLevel = experience.level || 3;

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <span>📊</span>
        <span>Experience & Comfort</span>
      </div>

      <h2 className="onboarding-screen-title">How comfortable are you with interviews?</h2>
      <p className="onboarding-screen-desc">
        Be honest! We tailor the AI interviewer's pacing and difficulty to match where you are.
      </p>

      {/* Slider Section */}
      <div className="onboarding-slider-card">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-wider font-bold text-[#7c7895]">
            Comfort Level
          </span>
          <span className="text-sm font-semibold text-[#6355ff]">
            {comfortLabels[currentLevel - 1]}
          </span>
        </div>

        <div className="onboarding-slider-wrap">
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={currentLevel}
            onChange={(e) => updateField("level", parseInt(e.target.value, 10))}
            className="onboarding-slider-input"
          />
          <div className="onboarding-slider-ticks">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>

        <div className="flex justify-between text-xs text-[#7c7895] mt-2">
          <span>Never interviewed</span>
          <span>Somewhat comfortable</span>
          <span>Very confident</span>
        </div>
      </div>

      <div className="onboarding-divider-line" />

      {/* Previous interview frequency */}
      <div className="onboarding-sub-section">
        <h3 className="text-base font-bold text-[#191729] dark:text-[#f8f7ff] mb-2">
          Have you interviewed before?
        </h3>
        <div className="onboarding-timeline-grid">
          {previousOptions.map((opt) => {
            const isSelected = experience.previousInterviews === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => updateField("previousInterviews", opt.id)}
                className={`onboarding-timeline-card ${isSelected ? "selected" : ""}`}
              >
                <span className="font-semibold text-sm">{opt.label}</span>
                <span className="text-xs text-[#7c7895]">{opt.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="onboarding-divider-line" />

      {/* Difficulties / Weak areas */}
      <div className="onboarding-sub-section">
        <h3 className="text-base font-bold text-[#191729] dark:text-[#f8f7ff] mb-1">
          What usually gives you difficulty?
        </h3>
        <p className="text-xs text-[#7c7895] mb-3">
          Select all that apply. Our AI coach will give targeted feedback to fix these exact gaps.
        </p>

        <div className="onboarding-pill-cards-grid">
          {challengeOptions.map((c) => {
            const isSelected = (experience.challenges || []).includes(c.id);
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => toggleChallenge(c.id)}
                className={`onboarding-pill-card ${isSelected ? "selected" : ""}`}
              >
                <span className="onboarding-pill-card-icon">{c.icon}</span>
                <span className="onboarding-pill-card-label">{c.label}</span>
                <div className={`onboarding-checkbox-indicator ${isSelected ? "checked" : ""}`}>
                  {isSelected && <Check size={12} strokeWidth={3} className="text-white" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}