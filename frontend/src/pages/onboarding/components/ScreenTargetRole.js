import React from "react";
import { Check, UserCheck, Briefcase } from "lucide-react";

export function ScreenTargetRole({
  roles = [],
  experience = "",
  customRole = "",
  onRolesChange,
  onExperienceChange,
  onCustomRoleChange,
}) {
  const roleOptions = [
    { id: "Software Engineer", label: "Software Engineer", icon: "💻" },
    { id: "Frontend Developer", label: "Frontend Developer", icon: "🎨" },
    { id: "Backend Developer", label: "Backend Developer", icon: "⚙️" },
    { id: "Full Stack Developer", label: "Full Stack Developer", icon: "🌐" },
    { id: "Data Analyst", label: "Data Analyst", icon: "📊" },
    { id: "Data Engineer", label: "Data Engineer", icon: "🗄️" },
    { id: "Machine Learning Engineer", label: "Machine Learning Engineer", icon: "🤖" },
    { id: "AI Engineer", label: "AI Engineer", icon: "🧠" },
    { id: "DevOps Engineer", label: "DevOps Engineer", icon: "🚀" },
    { id: "Cloud Engineer", label: "Cloud Engineer", icon: "☁️" },
    { id: "Product Manager", label: "Product Manager", icon: "💡" },
    { id: "Business Analyst", label: "Business Analyst", icon: "📈" },
    { id: "Other", label: "Other", icon: "✨" },
  ];

  const experienceLevels = [
    { id: "Internship", label: "Internship", desc: "Currently a student" },
    { id: "Entry Level", label: "Entry Level", desc: "0–1 years" },
    { id: "1-2 years", label: "1–2 years", desc: "Early career" },
    { id: "3-5 years", label: "3–5 years", desc: "Mid-level" },
    { id: "5+ years", label: "5+ years", desc: "Senior" },
  ];

  const toggleRole = (id) => {
    if (roles.includes(id)) {
      onRolesChange(roles.filter((r) => r !== id));
    } else {
      onRolesChange([...roles, id]);
    }
  };

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <Briefcase size={16} className="text-[#6355ff]" />
        <span>Target Role</span>
      </div>

      <h2 className="onboarding-screen-title">What role are you targeting?</h2>
      <p className="onboarding-screen-desc">
        Select all roles you are preparing for. You can choose multiple.
      </p>

      <div className="onboarding-roles-grid">
        {roleOptions.map((role) => {
          const isSelected = roles.includes(role.id);
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => toggleRole(role.id)}
              className={`onboarding-pill-card ${isSelected ? "selected" : ""}`}
            >
              <span className="onboarding-pill-card-icon">{role.icon}</span>
              <span className="onboarding-pill-card-label">{role.label}</span>
              <div className={`onboarding-checkbox-indicator ${isSelected ? "checked" : ""}`}>
                {isSelected && <Check size={12} strokeWidth={3} className="text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      {roles.includes("Other") && (
        <div className="onboarding-custom-input-wrap animate-fade">
          <label>Please specify your target role:</label>
          <input
            type="text"
            placeholder="e.g. Cybersecurity Analyst, iOS Developer, QA Automation..."
            value={customRole || ""}
            onChange={(e) => onCustomRoleChange(e.target.value)}
            className="onboarding-text-input"
            autoFocus
          />
        </div>
      )}

      <div className="onboarding-divider-line" />

      <div className="onboarding-sub-section">
        <div className="flex items-center gap-2 mb-2">
          <UserCheck size={18} className="text-[#6355ff]" />
          <h3 className="text-base font-bold text-[#191729] dark:text-[#f8f7ff]">
            Target experience level
          </h3>
        </div>

        <div className="onboarding-timeline-grid">
          {experienceLevels.map((lvl) => {
            const isSelected = experience === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => onExperienceChange(lvl.id)}
                className={`onboarding-timeline-card ${isSelected ? "selected" : ""}`}
              >
                <span className="font-semibold text-sm">{lvl.label}</span>
                <span className="text-xs text-[#7c7895]">{lvl.desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}