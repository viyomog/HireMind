import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Target, 
  BarChart3, 
  Map, 
  HelpCircle, 
  AlertCircle 
} from "lucide-react";
import { useAuth } from "../../context/AuthContext.js";
import { apiRequest } from "../../lib/api.js";
import logo from "../../assets/icon.svg";
import onboardingImg from "../../assets/onboarding.png";

// Step components
import { WelcomeModal } from "./components/WelcomeModal.js";
import { ScreenCurrentStatus } from "./components/ScreenCurrentStatus.js";
import { ScreenEducation } from "./components/ScreenEducation.js";
import { ScreenCareerGoal } from "./components/ScreenCareerGoal.js";
import { ScreenTargetRole } from "./components/ScreenTargetRole.js";
import { ScreenTechnicalSkills } from "./components/ScreenTechnicalSkills.js";
import { ScreenInterviewAreas } from "./components/ScreenInterviewAreas.js";
import { ScreenInterviewExperience } from "./components/ScreenInterviewExperience.js";
import { ScreenCommunicationGoals } from "./components/ScreenCommunicationGoals.js";
import { ScreenJobPreferences } from "./components/ScreenJobPreferences.js";
import { ScreenLearningPreferences } from "./components/ScreenLearningPreferences.js";
import { ScreenResume } from "./components/ScreenResume.js";
import { ScreenFinalProfile } from "./components/ScreenFinalProfile.js";

import "./OnboardingPage.css";

const STEPS = [
  { id: 1, label: "Welcome", short: "Welcome" },
  { id: 2, label: "Current Status", short: "Status" },
  { id: 3, label: "Education", short: "Education" },
  { id: 4, label: "Career Goal", short: "Goals" },
  { id: 5, label: "Target Role", short: "Role" },
  { id: 6, label: "Skills", short: "Skills" },
  { id: 7, label: "Practice Areas", short: "Areas" },
  { id: 8, label: "Experience", short: "Experience" },
  { id: 9, label: "Communication", short: "Communication" },
  { id: 10, label: "Preferences", short: "Job Prefs" },
  { id: 11, label: "Learning", short: "Learning" },
  { id: 12, label: "Resume", short: "Resume" },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { user, checkAuth } = useAuth();

  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [currentStep, setCurrentStep] = useState(2); // Steps 2 to 12, 13 is Final Profile
  const [errorMsg, setErrorMsg] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    currentStatus: "Student",
    customStatus: "",
    education: {
      level: "Bachelor's",
      degree: "B.Tech",
      specialization: "Computer Science",
      institution: "",
      graduationYear: "2025",
      cgpa: "",
    },
    careerGoal: ["Full-time Job", "Campus Placement"],
    preparationTimeline: "1 month",
    targetRoles: ["Software Engineer"],
    customRole: "",
    experienceLevel: "Entry Level",
    technicalSkills: ["JavaScript", "React", "Python", "SQL"],
    interviewFocus: ["Coding", "Technical Concepts", "HR / Behavioral"],
    interviewExperience: {
      level: 3,
      previousInterviews: "Never",
      challenges: ["Getting nervous", "Explaining projects"],
    },
    communicationGoals: ["Confidence", "Answer structure"],
    interviewMode: "Both",
    jobPreferences: {
      workType: "Any",
      locations: ["Remote", "Bangalore"],
      companyType: "Any",
      expectedSalary: "",
      targetCompanies: [],
    },
    preferences: {
      dailyPreparationTime: "30-60 min",
      learningStyle: "Practice questions",
      feedbackStyle: "Detailed explanation",
    },
    resume: {
      fileName: "",
      fileSize: "",
      uploadedAt: null,
    },
  });

  // Attempt to prefill if user profile already exists
  useEffect(() => {
    let isMounted = true;
    async function loadExisting() {
      try {
        const res = await apiRequest("/api/onboarding");
        if (res?.profile && isMounted) {
          setFormData((prev) => ({
            ...prev,
            ...res.profile,
            education: { ...prev.education, ...(res.profile.education || {}) },
            interviewExperience: { ...prev.interviewExperience, ...(res.profile.interviewExperience || {}) },
            preferences: { ...prev.preferences, ...(res.profile.preferences || {}) },
            jobPreferences: { ...prev.jobPreferences, ...(res.profile.jobPreferences || {}) },
          }));
        }
      } catch (e) {
        // Not yet saved or first time, ignore
      }
    }
    loadExisting();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleStartWelcome = () => {
    setShowWelcomeModal(false);
    setCurrentStep(2);
  };

  const validateStep = (step) => {
    setErrorMsg("");
    switch (step) {
      case 2:
        if (!formData.currentStatus) {
          setErrorMsg("Please select an option that best describes your current status.");
          return false;
        }
        if (formData.currentStatus === "Other" && !formData.customStatus.trim()) {
          setErrorMsg("Please specify your current status.");
          return false;
        }
        return true;

      case 3:
        if (!formData.education.level) {
          setErrorMsg("Please select your highest education level.");
          return false;
        }
        if (!formData.education.degree.trim()) {
          setErrorMsg("Please enter your degree or course name.");
          return false;
        }
        return true;

      case 4:
        if (!formData.careerGoal || formData.careerGoal.length === 0) {
          setErrorMsg("Please select at least one career goal.");
          return false;
        }
        if (!formData.preparationTimeline) {
          setErrorMsg("Please select when you want to be interview-ready.");
          return false;
        }
        return true;

      case 5:
        if (!formData.targetRoles || formData.targetRoles.length === 0) {
          setErrorMsg("Please select at least one target role.");
          return false;
        }
        if (formData.targetRoles.includes("Other") && !formData.customRole.trim()) {
          setErrorMsg("Please specify your target role.");
          return false;
        }
        if (!formData.experienceLevel) {
          setErrorMsg("Please select your target experience level.");
          return false;
        }
        return true;

      case 7:
        if (!formData.interviewFocus || formData.interviewFocus.length === 0) {
          setErrorMsg("Please select at least one interview area to practice.");
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const saveProfileData = async () => {
    setIsSaving(true);
    try {
      const payload = {
        currentStatus:
          formData.currentStatus === "Other" && formData.customStatus.trim()
            ? formData.customStatus.trim()
            : formData.currentStatus,
        education: formData.education,
        careerGoal: formData.careerGoal,
        preparationTimeline: formData.preparationTimeline,
        targetRoles: formData.targetRoles.map((r) =>
          r === "Other" && formData.customRole.trim() ? formData.customRole.trim() : r
        ),
        experienceLevel: formData.experienceLevel,
        technicalSkills: formData.technicalSkills,
        interviewFocus: formData.interviewFocus,
        interviewExperience: formData.interviewExperience,
        communicationGoals: formData.communicationGoals,
        preferences: {
          interviewMode: formData.interviewMode,
          dailyPreparationTime: formData.preferences.dailyPreparationTime,
          learningStyle: formData.preferences.learningStyle,
          feedbackStyle: formData.preferences.feedbackStyle,
        },
        jobPreferences: formData.jobPreferences,
        resume: formData.resume,
        onboardingCompleted: true,
      };

      await apiRequest("/api/onboarding", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (checkAuth) {
        await checkAuth();
      }
      return true;
    } catch (err) {
      console.error("Save onboarding profile error:", err);
      setErrorMsg(err.message || "Failed to save profile. Please try again.");
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const handleNext = async () => {
    if (!validateStep(currentStep)) return;

    if (currentStep < 12) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (currentStep === 12) {
      // Completed last step, save to database and transition to final profile preview
      const success = await saveProfileData();
      if (success) {
        setCurrentStep(13);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    if (currentStep > 2) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (currentStep === 2) {
      setShowWelcomeModal(true);
    }
  };

  const handleFinish = () => {
    navigate("/");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 2:
        return (
          <ScreenCurrentStatus
            value={formData.currentStatus}
            customValue={formData.customStatus}
            onChange={(val) => setFormData((prev) => ({ ...prev, currentStatus: val }))}
            onCustomChange={(val) => setFormData((prev) => ({ ...prev, customStatus: val }))}
          />
        );

      case 3:
        return (
          <ScreenEducation
            data={formData.education}
            onChange={(val) => setFormData((prev) => ({ ...prev, education: val }))}
          />
        );

      case 4:
        return (
          <ScreenCareerGoal
            goals={formData.careerGoal}
            timeline={formData.preparationTimeline}
            onGoalsChange={(val) => setFormData((prev) => ({ ...prev, careerGoal: val }))}
            onTimelineChange={(val) => setFormData((prev) => ({ ...prev, preparationTimeline: val }))}
          />
        );

      case 5:
        return (
          <ScreenTargetRole
            roles={formData.targetRoles}
            experience={formData.experienceLevel}
            customRole={formData.customRole}
            onRolesChange={(val) => setFormData((prev) => ({ ...prev, targetRoles: val }))}
            onExperienceChange={(val) => setFormData((prev) => ({ ...prev, experienceLevel: val }))}
            onCustomRoleChange={(val) => setFormData((prev) => ({ ...prev, customRole: val }))}
          />
        );

      case 6:
        return (
          <ScreenTechnicalSkills
            selectedSkills={formData.technicalSkills}
            onChange={(val) => setFormData((prev) => ({ ...prev, technicalSkills: val }))}
          />
        );

      case 7:
        return (
          <ScreenInterviewAreas
            selectedAreas={formData.interviewFocus}
            onChange={(val) => setFormData((prev) => ({ ...prev, interviewFocus: val }))}
          />
        );

      case 8:
        return (
          <ScreenInterviewExperience
            experience={formData.interviewExperience}
            onChange={(val) => setFormData((prev) => ({ ...prev, interviewExperience: val }))}
          />
        );

      case 9:
        return (
          <ScreenCommunicationGoals
            goals={formData.communicationGoals}
            mode={formData.interviewMode}
            onGoalsChange={(val) => setFormData((prev) => ({ ...prev, communicationGoals: val }))}
            onModeChange={(val) => setFormData((prev) => ({ ...prev, interviewMode: val }))}
          />
        );

      case 10:
        return (
          <ScreenJobPreferences
            data={formData.jobPreferences}
            onChange={(val) => setFormData((prev) => ({ ...prev, jobPreferences: val }))}
          />
        );

      case 11:
        return (
          <ScreenLearningPreferences
            preferences={formData.preferences}
            onChange={(val) => setFormData((prev) => ({ ...prev, preferences: val }))}
          />
        );

      case 12:
        return (
          <ScreenResume
            resume={formData.resume}
            onResumeChange={(val) => setFormData((prev) => ({ ...prev, resume: val }))}
            onSkip={handleNext}
          />
        );

      case 13:
        return (
          <ScreenFinalProfile
            data={formData}
            userName={user?.name}
            onComplete={handleFinish}
            isSaving={isSaving}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="onboarding-page-root">
      {/* Welcome Screen Pop-up Modal */}
      {showWelcomeModal && (
        <WelcomeModal
          onStart={handleStartWelcome}
          userName={user?.name}
        />
      )}

      {/* Main Glass/Card Container */}
      <div className="onboarding-card-wrapper">
        <div className="onboarding-split-layout">
          {/* LEFT SIDEBAR: Brand, Value Props, Illustration */}
          <aside className="onboarding-left-panel">
            {/* Top Brand */}
            <div className="onboarding-brand-header">
              <div className="onboarding-logo-combo">
                <img src={logo} alt="HireMind" className="onboarding-logo-img" style={{ width: "38px", height: "38px", maxWidth: "38px", maxHeight: "38px", objectFit: "contain" }} />
                <div>
                  <h1 className="onboarding-brand-title">HireMind</h1>
                  <span className="onboarding-brand-sub">Your AI-Powered Career Coach</span>
                </div>
              </div>
            </div>

            {/* Middle Value Proposition */}
            <div className="onboarding-left-body">
              <div className="onboarding-left-badge">
                <Sparkles size={13} className="text-[#6355ff]" />
                <span>Smart Onboarding</span>
              </div>

              <h2 className="onboarding-left-heading">
                Personalized Practice for Your Next Opportunity
              </h2>

              <p className="onboarding-left-desc">
                Help us understand your background so we can create a customized interview experience just for you.
              </p>

              {/* 3 Value Pillars */}
              <div className="onboarding-pillars-list">
                <div className="onboarding-pillar-card">
                  <div className="onboarding-pillar-icon bg-[#f2f0ff] text-[#6355ff]">
                    <Target size={18} />
                  </div>
                  <div>
                    <h4 className="onboarding-pillar-title">Relevant Questions</h4>
                    <p className="onboarding-pillar-sub">Based on your background</p>
                  </div>
                </div>

                <div className="onboarding-pillar-card">
                  <div className="onboarding-pillar-icon bg-[#eaf4ff] text-[#0284c7]">
                    <BarChart3 size={18} />
                  </div>
                  <div>
                    <h4 className="onboarding-pillar-title">Smart Feedback</h4>
                    <p className="onboarding-pillar-sub">Tailored to your goals</p>
                  </div>
                </div>

                <div className="onboarding-pillar-card">
                  <div className="onboarding-pillar-icon bg-[#eafaf1] text-[#10b981]">
                    <Map size={18} />
                  </div>
                  <div>
                    <h4 className="onboarding-pillar-title">Personalized Roadmap</h4>
                    <p className="onboarding-pillar-sub">Built for your growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3D Avatar & Speech Bubble */}
            <div className="onboarding-left-footer">
              <div className="onboarding-speech-bubble">
                <span>Let's build your success together! 🚀</span>
                <div className="onboarding-speech-arrow" />
              </div>

              <div className="onboarding-character-wrap">
                <img
                  src={onboardingImg}
                  alt="HireMind Student"
                  className="onboarding-character-img"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </aside>

          {/* RIGHT PANEL: Stepper Bar, Question Form, Navigation Controls */}
          <main className="onboarding-right-panel">
            {/* Top Stepper Bar */}
            {currentStep <= 12 && (
              <div className="onboarding-stepper-header">
                <div className="onboarding-stepper-track">
                  {STEPS.map((s) => {
                    const isDone = s.id < currentStep;
                    const isActive = s.id === currentStep;

                    return (
                      <div
                        key={s.id}
                        className={`onboarding-step-node ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}
                        onClick={() => {
                          if (isDone) setCurrentStep(s.id);
                        }}
                      >
                        <div className="onboarding-step-circle">
                          {isDone ? (
                            <Check size={13} strokeWidth={3} />
                          ) : (
                            <span>{s.id}</span>
                          )}
                        </div>
                        <span className="onboarding-step-label">{s.short}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Error Message Toast */}
            {errorMsg && (
              <div className="onboarding-error-banner animate-fade">
                <AlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Dynamic Step Content */}
            <div className="onboarding-step-body">
              {renderCurrentStep()}
            </div>

            {/* Bottom Navigation Buttons */}
            {currentStep <= 12 && (
              <div className="onboarding-bottom-nav">
                <button
                  type="button"
                  onClick={handleBack}
                  className="onboarding-btn-back"
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>

                <div className="flex items-center gap-3">
                  {currentStep === 12 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="onboarding-btn-skip"
                    >
                      Skip for now
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={isSaving}
                    className="onboarding-btn-primary"
                  >
                    {isSaving ? (
                      <span>Saving Profile...</span>
                    ) : (
                      <>
                        <span>{currentStep === 12 ? "Complete Profile" : "Continue"}</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}