import React from "react";
import { GraduationCap, Award, BookMarked, Building2, Calendar, Percent } from "lucide-react";

export function ScreenEducation({ data, onChange }) {
  const educationLevels = ["Class 12", "Diploma", "Bachelor's", "Master's", "PhD", "Other"];
  const graduationYears = ["2023 or earlier", "2024", "2025", "2026", "2027", "2028+"];

  const updateField = (field, val) => {
    onChange({
      ...data,
      [field]: val,
    });
  };

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <GraduationCap size={16} className="text-[#6355ff]" />
        <span>Education</span>
      </div>

      <h2 className="onboarding-screen-title">Tell us about your education</h2>
      <p className="onboarding-screen-desc">
        This helps HireMind calibrate your interview level and relevant coursework.
      </p>

      <div className="onboarding-form-stack">
        <div className="onboarding-field-group">
          <label className="onboarding-label">
            Highest / Current Education Level <span className="text-[#6355ff]">*</span>
          </label>
          <div className="onboarding-pill-selector">
            {educationLevels.map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => updateField("level", lvl)}
                className={`onboarding-pill-btn ${data.level === lvl ? "active" : ""}`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="onboarding-grid-2">
          <div className="onboarding-field-group">
            <label className="onboarding-label">
              Degree / Course <span className="text-[#6355ff]">*</span>
            </label>
            <div className="onboarding-input-with-icon">
              <Award size={18} className="text-[#7c7895]" />
              <input
                type="text"
                placeholder="e.g. B.Tech, BCA, B.Sc, MCA"
                value={data.degree || ""}
                onChange={(e) => updateField("degree", e.target.value)}
                className="onboarding-text-input-field"
              />
            </div>
          </div>

          <div className="onboarding-field-group">
            <label className="onboarding-label">Specialization / Branch</label>
            <div className="onboarding-input-with-icon">
              <BookMarked size={18} className="text-[#7c7895]" />
              <input
                type="text"
                placeholder="e.g. Computer Science, AI, IT"
                value={data.specialization || ""}
                onChange={(e) => updateField("specialization", e.target.value)}
                className="onboarding-text-input-field"
              />
            </div>
          </div>
        </div>

        <div className="onboarding-field-group">
          <label className="onboarding-label">College / University</label>
          <div className="onboarding-input-with-icon">
            <Building2 size={18} className="text-[#7c7895]" />
            <input
              type="text"
              placeholder="e.g. Stanford University, IIT Delhi, Mumbai University"
              value={data.institution || ""}
              onChange={(e) => updateField("institution", e.target.value)}
              className="onboarding-text-input-field"
            />
          </div>
        </div>

        <div className="onboarding-grid-2">
          <div className="onboarding-field-group">
            <label className="onboarding-label">Graduation Year</label>
            <div className="onboarding-select-wrap">
              <select
                value={data.graduationYear || ""}
                onChange={(e) => updateField("graduationYear", e.target.value)}
                className="onboarding-select-field"
              >
                <option value="">Select year</option>
                {graduationYears.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="onboarding-field-group">
            <label className="onboarding-label">
              Current CGPA / Percentage <span className="onboarding-optional-badge">(optional)</span>
            </label>
            <div className="onboarding-input-with-icon">
              <Percent size={18} className="text-[#7c7895]" />
              <input
                type="text"
                placeholder="e.g. 8.5 CGPA or 85%"
                value={data.cgpa || ""}
                onChange={(e) => updateField("cgpa", e.target.value)}
                className="onboarding-text-input-field"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}