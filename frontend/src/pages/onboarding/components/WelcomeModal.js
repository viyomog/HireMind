import React, { useState } from "react";
import { Sparkles, Clock, Target, Shield, ArrowRight } from "lucide-react";
import logo from "../../../assets/icon.svg";

export function WelcomeModal({ onStart, userName }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleStart = () => {
    setIsClosing(true);
    setTimeout(() => {
      onStart();
    }, 280);
  };

  return (
    <div className={`onboarding-modal-overlay ${isClosing ? "fade-out" : "fade-in"}`}>
      <div className={`onboarding-modal-card ${isClosing ? "scale-down" : "scale-up"}`}>
        <div className="onboarding-modal-icon-wrap">
          <img src={logo} alt="HireMind" className="onboarding-modal-logo" />
          <div className="onboarding-sparkle-badge">
            <Sparkles size={14} />
          </div>
        </div>

        <h1 className="onboarding-modal-title">
          Welcome to HireMind 👋{userName ? `, ${userName}` : ""}
        </h1>

        <p className="onboarding-modal-subtitle">
          Let's personalize your interview preparation. This will take about 2–3 minutes.
        </p>

        <div className="onboarding-modal-perks">
          <div className="onboarding-perk-item">
            <div className="onboarding-perk-icon">
              <Clock size={16} />
            </div>
            <div>
              <h4>2–3 Minutes</h4>
              <p>Quick & easy questions</p>
            </div>
          </div>

          <div className="onboarding-perk-item">
            <div className="onboarding-perk-icon">
              <Target size={16} />
            </div>
            <div>
              <h4>100% Personalized</h4>
              <p>Tailored AI mock interviews</p>
            </div>
          </div>

          <div className="onboarding-perk-item">
            <div className="onboarding-perk-icon">
              <Shield size={16} />
            </div>
            <div>
              <h4>Private & Secure</h4>
              <p>Your data stays safe</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleStart}
          className="onboarding-modal-btn"
        >
          <span>Let's Get Started</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}