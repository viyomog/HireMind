import React from "react";
import { GraduationCap, Briefcase, Laptop, RefreshCw, BookOpen, Search, MoreHorizontal, Check, Users } from "lucide-react";

export function ScreenCurrentStatus({ value, customValue, onChange, onCustomChange }) {
  const options = [
    {
      id: "Student",
      title: "Student",
      description: "Currently pursuing my degree",
      icon: <GraduationCap size={22} className="text-[#6355ff]" />,
      bg: "bg-[#f2f0ff]",
    },
    {
      id: "Fresh Graduate",
      title: "Fresh Graduate",
      description: "Recently completed my degree",
      icon: <Briefcase size={22} className="text-[#b46b2b]" />,
      bg: "bg-[#fff6ea]",
    },
    {
      id: "Working Professional",
      title: "Working Professional",
      description: "Currently employed and looking to grow",
      icon: <Laptop size={22} className="text-[#2080f0]" />,
      bg: "bg-[#eaf4ff]",
    },
    {
      id: "Career Changer",
      title: "Career Changer",
      description: "Switching to a new field or industry",
      icon: <RefreshCw size={22} className="text-[#10b981]" />,
      bg: "bg-[#eafaf1]",
    },
    {
      id: "Preparing for Placements",
      title: "Preparing for Placements",
      description: "Actively preparing for campus placements",
      icon: <BookOpen size={22} className="text-[#ec4899]" />,
      bg: "bg-[#fdf2f8]",
    },
    {
      id: "Actively Looking for a Job",
      title: "Actively Looking for a Job",
      description: "Searching for new opportunities",
      icon: <Search size={22} className="text-[#0284c7]" />,
      bg: "bg-[#f0f9ff]",
    },
    {
      id: "Other",
      title: "Other",
      description: "I prefer to specify",
      icon: <MoreHorizontal size={22} className="text-[#6b7280]" />,
      bg: "bg-[#f3f4f6]",
    },
  ];

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <Users size={16} className="text-[#6355ff]" />
        <span>About You</span>
      </div>

      <h2 className="onboarding-screen-title">What best describes you?</h2>
      <p className="onboarding-screen-desc">
        This helps us tailor your interview experience and recommendations.
      </p>

      <div className="onboarding-options-grid">
        {options.map((option) => {
          const isSelected = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`onboarding-card-option ${isSelected ? "selected" : ""}`}
            >
              <div className={`onboarding-card-icon ${option.bg}`}>
                {option.icon}
              </div>

              <div className="onboarding-card-text">
                <span className="onboarding-card-title">{option.title}</span>
                <span className="onboarding-card-sub">{option.description}</span>
              </div>

              <div className={`onboarding-card-indicator ${isSelected ? "checked" : ""}`}>
                {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
              </div>
            </button>
          );
        })}
      </div>

      {value === "Other" && (
        <div className="onboarding-custom-input-wrap animate-fade">
          <label>Please specify your current status:</label>
          <input
            type="text"
            placeholder="e.g., Freelancer, Sabbatical, Bootcamper..."
            value={customValue || ""}
            onChange={(e) => onCustomChange(e.target.value)}
            className="onboarding-text-input"
            autoFocus
          />
        </div>
      )}
    </div>
  );
}