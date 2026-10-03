import React from "react";
import { Check, Clock, Compass, Target } from "lucide-react";

export function ScreenCareerGoal({ goals = [], timeline = "", onGoalsChange, onTimelineChange }) {
  const goalOptions = [
    { id: "Campus Placement", label: "Campus Placement", icon: "🎓" },
    { id: "Internship", label: "Internship", icon: "💼" },
    { id: "Full-time Job", label: "Full-time Job", icon: "🚀" },
    { id: "Job Switch", label: "Job Switch", icon: "🔄" },
    { id: "Higher Studies", label: "Higher Studies", icon: "📚" },
    { id: "Freelancing", label: "Freelancing", icon: "💻" },
    { id: "Career Change", label: "Career Change", icon: "🌱" },
    { id: "General Interview Preparation", label: "General Interview Preparation", icon: "🎯" },
  ];

  const timelineOptions = [
    { id: "2 weeks", label: "⚡ 2 weeks", desc: "Urgent preparation" },
    { id: "1 month", label: "🗓️ 1 month", desc: "Standard sprint" },
    { id: "2-3 months", label: "🎯 2–3 months", desc: "Balanced growth" },
    { id: "3-6 months", label: "📘 3–6 months", desc: "Deep foundation" },
    { id: "No specific deadline", label: "♾️ No specific deadline", desc: "Continuous learning" },
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
        <Target size={16} className="text-[#6355ff]" />
        <span>Career Goals</span>
      </div>

      <h2 className="onboarding-screen-title">What are you preparing for?</h2>
      <p className="onboarding-screen-desc">
        Select all that apply. This helps us customize your preparation roadmap.
      </p>

      <div className="onboarding-pill-cards-grid">
        {goalOptions.map((g) => {
          const isSelected = goals.includes(g.id);
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => toggleGoal(g.id)}
              className={`onboarding-pill-card ${isSelected ? "selected" : ""}`}
            >
              <span className="onboarding-pill-card-icon">{g.icon}</span>
              <span className="onboarding-pill-card-label">{g.label}</span>
              <div className={`onboarding-checkbox-indicator ${isSelected ? "checked" : ""}`}>
                {isSelected && <Check size={12} strokeWidth={3} className="text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="onboarding-divider-line" />

      <div className="onboarding-sub-section">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={18} className="text-[#6355ff]" />
          <h3 className="text-base font-bold text-[#191729] dark:text-[#f8f7ff]">
            When do you want to be interview-ready?
          </h3>
        </div>

        <div className="onboarding-timeline-grid">
          {timelineOptions.map((t) => {
            const isSelected = timeline === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => onTimelineChange(t.id)}
                className={`onboarding-timeline-card ${isSelected ? "selected" : ""}`}
              >
                <span className="font-semibold text-sm">{t.label}</span>
                <span className="text-xs text-[#7c7895]">{t.desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}