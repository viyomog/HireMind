import React, { useState, useEffect } from "react";
import { ArrowLeft, Eye, EyeOff, Mail, Lock, UserRound } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./AuthPage.css";

import loginImage from "../assets/hiremind-login.png";
import signupImage from "../assets/hiremind-signup.png";
import logo from "../assets/icon.svg";

if (typeof window !== "undefined") {
  const p1 = new Image();
  p1.src = loginImage;
  const p2 = new Image();
  p2.src = signupImage;
  const p3 = new Image();
  p3.src = logo;
}

function AuthPage({ mode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isPathSignup = location.pathname.includes("signup");
  const [isSignup, setIsSignup] = useState(mode ? mode === "signup" : isPathSignup);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (mode) {
      setIsSignup(mode === "signup");
    } else {
      setIsSignup(location.pathname.includes("signup"));
    }
  }, [mode, location.pathname]);

  const handleBack = () => {
    navigate("/");
  };

  const handleSwitchMode = (targetMode) => {
    setIsSignup(targetMode === "signup");
    navigate(targetMode === "signup" ? "/signup" : "/login");
  };

  return (
    <main className="auth-page">
      <div className={`auth-container ${isSignup ? "mode-signup" : "mode-login"}`}>
        <Link to="/" className="auth-back">
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>

        <section className="auth-visual">
          <img
            src={loginImage}
            alt="HireMind Login"
            className={`auth-visual-image auth-img-login ${!isSignup ? "is-active" : "is-hidden"}`}
            loading="eager"
            decoding="sync"
          />
          <img
            src={signupImage}
            alt="HireMind Signup"
            className={`auth-visual-image auth-img-signup ${isSignup ? "is-active" : "is-hidden"}`}
            loading="eager"
            decoding="sync"
          />
        </section>

        <section className="auth-form-section">
          <Link to="/" className="auth-back auth-back-mobile">
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>

          <div className="auth-form-wrapper">
            <Link to="/" className="auth-logo">
              <img src={logo} alt="HireMind" />
              <span>
                Hire<span>Mind</span>
              </span>
            </Link>

            <div className="auth-form-panes">
              <div
                className={`auth-form-pane pane-login ${!isSignup ? "is-active" : "is-hidden"}`}
              >
                <div className="auth-heading">
                  <h1>Welcome back</h1>
                  <p>
                    Login to continue your interview preparation journey with
                    HireMind.
                  </p>
                </div>

                <div className="social-buttons">
                  <button className="social-button" type="button">
                    <span className="google-icon">G</span>
                    Continue with Google
                  </button>

                  <button className="social-button" type="button">
                    <span className="github-icon">●</span>
                    Continue with GitHub
                  </button>
                </div>

                <div className="divider">
                  <span />
                  <p>or</p>
                  <span />
                </div>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>Email address</label>
                    <div className="input-wrapper">
                      <Mail size={17} />
                      <input type="email" placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="label-row">
                      <label>Password</label>
                      <button type="button" className="forgot-password">
                        Forgot password?
                      </button>
                    </div>

                    <div className="input-wrapper">
                      <Lock size={17} />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                      </button>
                    </div>
                  </div>

                  <button className="submit-button" type="submit">
                    Log in
                    <span>→</span>
                  </button>
                </form>

                <div className="auth-switch">
                  New here?
                  <button
                    type="button"
                    className="auth-switch-link"
                    onClick={() => handleSwitchMode("signup")}
                  >
                    Sign up →
                  </button>
                </div>
              </div>

              <div
                className={`auth-form-pane pane-signup ${isSignup ? "is-active" : "is-hidden"}`}
              >
                <div className="auth-heading">
                  <h1>Create your account</h1>
                  <p>
                    Join HireMind and start preparing for your next opportunity.
                  </p>
                </div>

                <div className="social-buttons">
                  <button className="social-button" type="button">
                    <span className="google-icon">G</span>
                    Continue with Google
                  </button>

                  <button className="social-button" type="button">
                    <span className="github-icon">●</span>
                    Continue with GitHub
                  </button>
                </div>

                <div className="divider">
                  <span />
                  <p>or</p>
                  <span />
                </div>

                <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>Full name</label>
                    <div className="input-wrapper">
                      <UserRound size={17} />
                      <input type="text" placeholder="John Doe" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email address</label>
                    <div className="input-wrapper">
                      <Mail size={17} />
                      <input type="email" placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <div className="input-wrapper">
                      <Lock size={17} />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Confirm password</label>
                    <div className="input-wrapper">
                      <Lock size={17} />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={17} />
                        ) : (
                          <Eye size={17} />
                        )}
                      </button>
                    </div>
                  </div>

                  <button className="submit-button" type="submit">
                    Create account
                    <span>→</span>
                  </button>
                </form>

                <div className="auth-switch">
                  Already have an account?
                  <button
                    type="button"
                    className="auth-switch-link"
                    onClick={() => handleSwitchMode("login")}
                  >
                    Log in →
                  </button>
                </div>
              </div>
            </div>

            <p className="terms">
              By continuing, you agree to our <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthPage;
