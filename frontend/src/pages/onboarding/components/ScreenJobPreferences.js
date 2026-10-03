import React, { useState } from "react";
import { Building, MapPin, DollarSign, Building2, Plus, X, Globe, Briefcase } from "lucide-react";

export function ScreenJobPreferences({ data = {}, onChange }) {
  const [cityInput, setCityInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");

  const workTypes = ["Remote", "Hybrid", "On-site", "Any"];
  const companyTypes = ["Startup", "Mid-size", "Enterprise", "Any"];

  const popularCities = [
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Mumbai",
    "Delhi NCR",
    "Remote",
    "San Francisco",
    "New York",
    "London",
    "Singapore",
  ];

  const popularCompanies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Uber",
    "Atlassian",
    "Netflix",
    "Apple",
    "Stripe",
    "High-Growth Startups",
  ];

  const updateField = (field, val) => {
    onChange({
      ...data,
      [field]: val,
    });
  };

  const toggleCity = (city) => {
    const list = data.locations || [];
    if (list.includes(city)) {
      updateField("locations", list.filter((c) => c !== city));
    } else {
      updateField("locations", [...list, city]);
    }
  };

  const addCustomCity = (e) => {
    e.preventDefault();
    const trimmed = cityInput.trim();
    if (trimmed && !(data.locations || []).includes(trimmed)) {
      updateField("locations", [...(data.locations || []), trimmed]);
      setCityInput("");
    }
  };

  const toggleCompany = (company) => {
    const list = data.targetCompanies || [];
    if (list.includes(company)) {
      updateField("targetCompanies", list.filter((c) => c !== company));
    } else {
      updateField("targetCompanies", [...list, company]);
    }
  };

  const addCustomCompany = (e) => {
    e.preventDefault();
    const trimmed = companyInput.trim();
    if (trimmed && !(data.targetCompanies || []).includes(trimmed)) {
      updateField("targetCompanies", [...(data.targetCompanies || []), trimmed]);
      setCompanyInput("");
    }
  };

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <span>💼</span>
        <span>Job Preferences</span>
      </div>

      <h2 className="onboarding-screen-title">What kind of opportunities are you targeting?</h2>
      <p className="onboarding-screen-desc">
        Optional but helpful! This helps us curate company-specific question sets and salary insights.
      </p>

      {/* Work Type */}
      <div className="onboarding-field-group">
        <label className="onboarding-label flex items-center gap-1.5">
          <Globe size={16} className="text-[#6355ff]" />
          <span>Preferred Work Type</span>
        </label>
        <div className="onboarding-pill-selector">
          {workTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => updateField("workType", type)}
              className={`onboarding-pill-btn ${data.workType === type ? "active" : ""}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="onboarding-field-group">
        <label className="onboarding-label flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-[#0284c7]" />
            <span>Preferred Locations</span>
          </span>
          <span className="onboarding-optional-badge">Select multiple or type below</span>
        </label>

        <div className="onboarding-chips-wrap mb-2">
          {popularCities.map((city) => {
            const isSelected = (data.locations || []).includes(city);
            return (
              <button
                key={city}
                type="button"
                onClick={() => toggleCity(city)}
                className={`onboarding-skill-chip ${isSelected ? "selected" : ""}`}
              >
                <span>{city}</span>
              </button>
            );
          })}
        </div>

        <form onSubmit={addCustomCity} className="onboarding-custom-skill-form">
          <input
            type="text"
            placeholder="Add another city or region..."
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
            className="onboarding-custom-skill-input"
          />
          <button
            type="submit"
            disabled={!cityInput.trim()}
            className="onboarding-add-skill-btn"
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </form>

        {(data.locations || []).length > 0 && (
          <div className="onboarding-chips-wrap mt-2">
            {(data.locations || []).map((loc) => (
              <span key={loc} className="onboarding-chip-selected">
                {loc}
                <button
                  type="button"
                  onClick={() => toggleCity(loc)}
                  className="onboarding-chip-remove"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="onboarding-grid-2">
        {/* Company Type */}
        <div className="onboarding-field-group">
          <label className="onboarding-label flex items-center gap-1.5">
            <Building2 size={16} className="text-[#10b981]" />
            <span>Company Type</span>
          </label>
          <div className="onboarding-pill-selector">
            {companyTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => updateField("companyType", type)}
                className={`onboarding-pill-btn ${data.companyType === type ? "active" : ""}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Expected Salary */}
        <div className="onboarding-field-group">
          <label className="onboarding-label flex items-center gap-1.5">
            <DollarSign size={16} className="text-[#f59e0b]" />
            <span>Expected Salary <span className="onboarding-optional-badge">(optional)</span></span>
          </label>
          <input
            type="text"
            placeholder="e.g. ₹12-18 LPA or $90k-$120k"
            value={data.expectedSalary || ""}
            onChange={(e) => updateField("expectedSalary", e.target.value)}
            className="onboarding-text-input-field"
          />
        </div>
      </div>

      {/* Target Companies */}
      <div className="onboarding-field-group">
        <label className="onboarding-label flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Building size={16} className="text-[#6355ff]" />
            <span>Target Dream Companies <span className="onboarding-optional-badge">(optional)</span></span>
          </span>
        </label>

        <div className="onboarding-chips-wrap mb-2">
          {popularCompanies.map((c) => {
            const isSelected = (data.targetCompanies || []).includes(c);
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggleCompany(c)}
                className={`onboarding-skill-chip ${isSelected ? "selected" : ""}`}
              >
                <span>{c}</span>
              </button>
            );
          })}
        </div>

        <form onSubmit={addCustomCompany} className="onboarding-custom-skill-form">
          <input
            type="text"
            placeholder="+ Add another company..."
            value={companyInput}
            onChange={(e) => setCompanyInput(e.target.value)}
            className="onboarding-custom-skill-input"
          />
          <button
            type="submit"
            disabled={!companyInput.trim()}
            className="onboarding-add-skill-btn"
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </form>

        {(data.targetCompanies || []).length > 0 && (
          <div className="onboarding-chips-wrap mt-2">
            {(data.targetCompanies || []).map((comp) => (
              <span key={comp} className="onboarding-chip-selected">
                {comp}
                <button
                  type="button"
                  onClick={() => toggleCompany(comp)}
                  className="onboarding-chip-remove"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}