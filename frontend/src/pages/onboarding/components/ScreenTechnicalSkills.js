import React, { useState } from "react";
import { Search, Plus, X, Check, Code, Layers, Database, Cloud, Cpu, Server } from "lucide-react";

export function ScreenTechnicalSkills({ selectedSkills = [], onChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      category: "Languages",
      icon: <Code size={16} className="text-[#6355ff]" />,
      skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "Go", "C#", "Rust", "Ruby", "Swift", "Kotlin", "PHP", "SQL"],
    },
    {
      category: "Frontend",
      icon: <Layers size={16} className="text-[#0284c7]" />,
      skills: ["React", "Next.js", "Angular", "Vue.js", "HTML/CSS", "Tailwind CSS", "Redux", "TypeScript", "Svelte", "Webpack"],
    },
    {
      category: "Backend",
      icon: <Server size={16} className="text-[#10b981]" />,
      skills: ["Node.js", "Express", "Django", "Flask", "Spring Boot", ".NET", "FastAPI", "NestJS", "GraphQL", "REST APIs"],
    },
    {
      category: "Database",
      icon: <Database size={16} className="text-[#f59e0b]" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server", "Oracle", "Redis", "Firebase", "DynamoDB", "Supabase"],
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud size={16} className="text-[#3b82f6]" />,
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Linux", "Terraform", "Git"],
    },
    {
      category: "AI/ML",
      icon: <Cpu size={16} className="text-[#ec4899]" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "LLMs", "OpenAI API", "Computer Vision", "NLP", "Pandas", "NumPy"],
    },
  ];

  const allSkills = Array.from(new Set(skillCategories.flatMap((c) => c.skills)));

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      onChange(selectedSkills.filter((s) => s !== skill));
    } else {
      onChange([...selectedSkills, skill]);
    }
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    const trimmed = customInput.trim();
    if (trimmed && !selectedSkills.includes(trimmed)) {
      onChange([...selectedSkills, trimmed]);
      setCustomInput("");
    }
  };

  const filteredCategories = skillCategories.map((cat) => {
    if (activeCategory !== "all" && activeCategory !== cat.category) {
      return null;
    }
    const matching = cat.skills.filter((s) =>
      s.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    return matching.length > 0 ? { ...cat, skills: matching } : null;
  }).filter(Boolean);

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <span>⚡</span>
        <span>Technical Skills</span>
      </div>

      <h2 className="onboarding-screen-title">What technologies do you know?</h2>
      <p className="onboarding-screen-desc">
        Select your strongest skills. HireMind uses these to customize coding and system questions.
      </p>

      {/* Search and custom input */}
      <div className="onboarding-skills-search-bar">
        <div className="onboarding-search-input-wrap">
          <Search size={18} className="text-[#7c7895]" />
          <input
            type="text"
            placeholder="Search skills (e.g., React, Python, AWS)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="onboarding-search-input"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="text-[#7c7895] hover:text-[#191729] dark:hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <form onSubmit={handleAddCustom} className="onboarding-custom-skill-form">
          <input
            type="text"
            placeholder="+ Add other skill..."
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            className="onboarding-custom-skill-input"
          />
          <button
            type="submit"
            disabled={!customInput.trim()}
            className="onboarding-add-skill-btn"
          >
            <Plus size={16} />
            <span>Add</span>
          </button>
        </form>
      </div>

      {/* Selected skills pills preview */}
      {selectedSkills.length > 0 && (
        <div className="onboarding-selected-chips-box">
          <div className="text-xs font-semibold text-[#7c7895] mb-2 flex items-center justify-between">
            <span>Selected Skills ({selectedSkills.length})</span>
            <button
              type="button"
              onClick={() => onChange([])}
              className="text-xs text-[#6355ff] hover:underline"
            >
              Clear all
            </button>
          </div>
          <div className="onboarding-chips-wrap">
            {selectedSkills.map((skill) => (
              <span key={skill} className="onboarding-chip-selected">
                {skill}
                <button
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className="onboarding-chip-remove"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Category filter tabs */}
      <div className="onboarding-category-tabs">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`onboarding-tab-pill ${activeCategory === "all" ? "active" : ""}`}
        >
          All
        </button>
        {skillCategories.map((c) => (
          <button
            key={c.category}
            type="button"
            onClick={() => setActiveCategory(c.category)}
            className={`onboarding-tab-pill ${activeCategory === c.category ? "active" : ""}`}
          >
            {c.category}
          </button>
        ))}
      </div>

      {/* Categorized Skills lists */}
      <div className="onboarding-skills-groups-container">
        {filteredCategories.map((cat) => (
          <div key={cat.category} className="onboarding-skill-group">
            <div className="onboarding-skill-group-title">
              {cat.icon}
              <span>{cat.category}</span>
            </div>
            <div className="onboarding-chips-wrap">
              {cat.skills.map((skill) => {
                const isSelected = selectedSkills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`onboarding-skill-chip ${isSelected ? "selected" : ""}`}
                  >
                    <span>{skill}</span>
                    {isSelected ? (
                      <Check size={14} className="text-[#6355ff]" strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} className="text-[#a4a0c0]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}