import React from "react";
import { 
  Code2, 
  Layers, 
  Cpu, 
  BrainCircuit, 
  Bot, 
  Database, 
  Cloud, 
  MessageSquare, 
  Users, 
  BarChart3, 
  FolderGit2, 
  Check, 
  Sparkles 
} from "lucide-react";

export function ScreenInterviewAreas({ selectedAreas = [], onChange }) {
  const areas = [
    {
      id: "Coding",
      title: "Coding",
      description: "Live coding, algorithm challenges, and problem solving",
      icon: <Code2 size={22} className="text-[#6355ff]" />,
      bg: "bg-[#f2f0ff]",
    },
    {
      id: "System Design",
      title: "System Design",
      description: "High-level & low-level architecture, scalability, trade-offs",
      icon: <Layers size={22} className="text-[#0284c7]" />,
      bg: "bg-[#f0f9ff]",
    },
    {
      id: "Technical Concepts",
      title: "Technical Concepts",
      description: "Core OOP, networking, concurrency, memory, OS fundamentals",
      icon: <Cpu size={22} className="text-[#8b5cf6]" />,
      bg: "bg-[#f5f3ff]",
    },
    {
      id: "Data Structures & Algorithms",
      title: "Data Structures & Algorithms",
      description: "Trees, graphs, dynamic programming, arrays, and sorting",
      icon: <BrainCircuit size={22} className="text-[#ec4899]" />,
      bg: "bg-[#fdf2f8]",
    },
    {
      id: "AI/ML",
      title: "AI / Machine Learning",
      description: "Model design, evaluation metrics, deep learning, prompt engineering",
      icon: <Bot size={22} className="text-[#10b981]" />,
      bg: "bg-[#eafaf1]",
    },
    {
      id: "Databases / SQL",
      title: "Databases / SQL",
      description: "Schema design, indexing, ACID transactions, complex queries",
      icon: <Database size={22} className="text-[#f59e0b]" />,
      bg: "bg-[#fffbeb]",
    },
    {
      id: "Cloud",
      title: "Cloud & Infrastructure",
      description: "AWS, serverless, microservices, containerization, deployments",
      icon: <Cloud size={22} className="text-[#06b6d4]" />,
      bg: "bg-[#ecfeff]",
    },
    {
      id: "HR / Behavioral",
      title: "HR / Behavioral",
      description: "STAR method, conflict resolution, cultural fit, introduction",
      icon: <MessageSquare size={22} className="text-[#f97316]" />,
      bg: "bg-[#fff7ed]",
    },
    {
      id: "Leadership",
      title: "Leadership",
      description: "Mentorship, cross-functional collaboration, ownership, vision",
      icon: <Users size={22} className="text-[#6366f1]" />,
      bg: "bg-[#eef2ff]",
    },
    {
      id: "Case Studies",
      title: "Case Studies",
      description: "Business scenarios, product thinking, root-cause analysis",
      icon: <BarChart3 size={22} className="text-[#14b8a6]" />,
      bg: "bg-[#f0fdfa]",
    },
    {
      id: "Project-based questions",
      title: "Project-based Questions",
      description: "Deep dive into your resume projects, decisions, and tech stack",
      icon: <FolderGit2 size={22} className="text-[#84cc16]" />,
      bg: "bg-[#f7fee7]",
    },
  ];

  const toggleArea = (id) => {
    if (selectedAreas.includes(id)) {
      onChange(selectedAreas.filter((a) => a !== id));
    } else {
      onChange([...selectedAreas, id]);
    }
  };

  const selectAll = () => {
    onChange(areas.map((a) => a.id));
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <span>🎯</span>
        <span>Interview Focus</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h2 className="onboarding-screen-title">What do you want to practice?</h2>
          <p className="onboarding-screen-desc">
            This directly controls the questions our AI generates for your mock sessions.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold self-start sm:self-auto">
          <button
            type="button"
            onClick={selectAll}
            className="text-[#6355ff] hover:underline"
          >
            Select All
          </button>
          <span className="text-[#a4a0c0]">•</span>
          <button
            type="button"
            onClick={clearAll}
            className="text-[#7c7895] hover:underline"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="onboarding-areas-grid">
        {areas.map((area) => {
          const isSelected = selectedAreas.includes(area.id);
          return (
            <button
              key={area.id}
              type="button"
              onClick={() => toggleArea(area.id)}
              className={`onboarding-card-option area-card ${isSelected ? "selected" : ""}`}
            >
              <div className={`onboarding-card-icon ${area.bg}`}>
                {area.icon}
              </div>

              <div className="onboarding-card-text">
                <span className="onboarding-card-title">{area.title}</span>
                <span className="onboarding-card-sub">{area.description}</span>
              </div>

              <div className={`onboarding-card-indicator ${isSelected ? "checked" : ""}`}>
                {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}