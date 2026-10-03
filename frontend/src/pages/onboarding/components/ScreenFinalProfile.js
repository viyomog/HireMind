import React from "react";
import { Sparkles, ArrowRight, CheckCircle2, Target, Brain, Code, MessageSquare, Briefcase } from "lucide-react";

export function ScreenFinalProfile({ data, userName, onComplete, isSaving }) {
  const primaryRole = (data.targetRoles && data.targetRoles.length > 0)
    ? data.targetRoles.join(", ")
    : "Software Engineer";

  const expLevel = data.experienceLevel || "Entry Level";

  const skillsList = (data.technicalSkills && data.technicalSkills.length > 0)
    ? data.technicalSkills.slice(0, 8).join(" • ")
    : "React • Node.js • Python • SQL";

  const focusList = (data.interviewFocus && data.interviewFocus.length > 0)
    ? data.interviewFocus.slice(0, 4).join(" • ")
    : "Coding • Technical Concepts • HR";

  const commList = (data.communicationGoals && data.communicationGoals.length > 0)
    ? data.communicationGoals.slice(0, 3).join(" • ")
    : "Confidence • Answer Structure";

  const goalList = (data.careerGoal && data.careerGoal.length > 0)
    ? data.careerGoal.join(", ")
    : "Campus Placement / Internship";

  const firstName = userName ? userName.split(" ")[0] : "there";

  return (
    <div className="onboarding-screen-content onboarding-final-screen">
      <div className="onboarding-final-badge">
        <Sparkles size={16} className="text-[#6355ff]" />
        <span>Profile Calibrated</span>
      </div>

      <h2 className="onboarding-screen-title text-center">
        Your HireMind profile is ready 🎉
      </h2>
      <p className="onboarding-screen-desc text-center mb-6">
        Good to see you, <span className="font-semibold text-[#6355ff]">{firstName}</span>. Let's get you interview-ready!
      </p>

      {/* Futuristic AI Profile Card */}
      <div className="onboarding-profile-card">
        <div className="onboarding-profile-card-header">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-black text-white/80">
                HIREMIND AI PROFILE
              </span>
              <div className="text-white font-bold text-lg leading-tight">
                {primaryRole}
              </div>
            </div>
          </div>
          <span className="onboarding-exp-badge">
            {expLevel}
          </span>
        </div>

        <div className="onboarding-profile-card-body">
          {/* Skills */}
          <div className="onboarding-profile-row">
            <div className="onboarding-profile-row-label">
              <Code size={16} className="text-[#6355ff]" />
              <span>Skills</span>
            </div>
            <div className="onboarding-profile-row-value">
              {skillsList}
            </div>
          </div>

          {/* Interview Focus */}
          <div className="onboarding-profile-row">
            <div className="onboarding-profile-row-label">
              <Brain size={16} className="text-[#0284c7]" />
              <span>Interview Focus</span>
            </div>
            <div className="onboarding-profile-row-value">
              {focusList}
            </div>
          </div>

          {/* Communication Goals */}
          <div className="onboarding-profile-row">
            <div className="onboarding-profile-row-label">
              <MessageSquare size={16} className="text-[#10b981]" />
              <span>Communication</span>
            </div>
            <div className="onboarding-profile-row-value">
              {commList}
            </div>
          </div>

          {/* Goal */}
          <div className="onboarding-profile-row">
            <div className="onboarding-profile-row-label">
              <Target size={16} className="text-[#f59e0b]" />
              <span>Primary Goal</span>
            </div>
            <div className="onboarding-profile-row-value">
              {goalList}
            </div>
          </div>
        </div>

        <div className="onboarding-profile-card-footer">
          <div className="flex items-center gap-2 text-xs text-[#7c7895] dark:text-[#a4a0c0]">
            <CheckCircle2 size={16} className="text-[#10b981]" />
            <span>AI models calibrated for your customized questions</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="button"
          onClick={onComplete}
          disabled={isSaving}
          className="onboarding-btn-primary onboarding-btn-launch"
        >
          {isSaving ? (
            <span>Saving your profile...</span>
          ) : (
            <>
              <span>Go to Dashboard</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}