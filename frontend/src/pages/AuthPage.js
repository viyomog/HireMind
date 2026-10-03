import React, { useState, useEffect } from "react";
import { ArrowLeft, Eye, EyeOff, Mail, Lock, UserRound, Sun, Moon, AlertCircle } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.js";
import { useAuth } from "../context/AuthContext.js";
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
  const { isDark, toggleTheme } = useTheme();
  const { login, signup } = useAuth();

  const isPathSignup = location.pathname.includes("signup");
  const [isSignup, setIsSignup] = useState(mode ? mode === "signup" : isPathSignup);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

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
    setAuthError("");
    setIsSignup(targetMode === "signup");
    navigate(targetMode === "signup" ? "/signup" : "/login");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);

    try {
      await login(loginEmail, loginPassword);
      navigate("/");
    } catch (err) {
      setAuthError(err.message || "Invalid email or password");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setAuthError("");

    if (signupPassword !== signupConfirmPassword) {
      setAuthError("Passwords do not match");
      return;
    }

    setAuthLoading(true);

    try {
      await signup(signupName, signupEmail, signupPassword);
      navigate("/");
    } catch (err) {
      setAuthError(err.message || "Could not create account");
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className={`auth-container ${isSignup ? "mode-signup" : "mode-login"}`}>
        <Link to="/" className="auth-back" aria-label="Go to home">
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>

        <button
          type="button"
          className="auth-theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <section
          className="auth-visual"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={loginImage}
            alt="HireMind Login"
            className={`auth-visual-image auth-img-login ${!isSignup ? "is-active" : "is-hidden"}`}
            loading="eager"
            decoding="sync"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          <img
            src={signupImage}
            alt="HireMind Signup"
            className={`auth-visual-image auth-img-signup ${isSignup ? "is-active" : "is-hidden"}`}
            loading="eager"
            decoding="sync"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </section>

        <section className="auth-form-section">
          <Link to="/" className="auth-back auth-back-mobile" aria-label="Go to home">
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>

          <button
            type="button"
            className="auth-theme-toggle auth-theme-toggle-mobile"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <div className="auth-form-wrapper">
            <Link to="/" className="auth-logo">
              <img src={logo} alt="HireMind" />
              <span>
                Hire<span>Mind</span>
              </span>
            </Link>

            {authError && (
              <div className="auth-error-alert" role="alert">
                <AlertCircle size={15} />
                <span>{authError}</span>
              </div>
            )}

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
                    <FcGoogle size={19} />
                    <span>Continue with Google</span>
                  </button>

                  <button className="social-button" type="button">
                    <FaGithub size={18} />
                    <span>Continue with GitHub</span>
                  </button>
                </div>

                <div className="divider">
                  <span />
                  <p>or</p>
                  <span />
                </div>

                <form className="auth-form" onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label>Email address</label>
                    <div className="input-wrapper">
                      <Mail size={17} />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={loginEmail}
                        onChange={(e) => {
                          setLoginEmail(e.target.value);
                          setAuthError("");
                        }}
                        required
                      />
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
                        value={loginPassword}
                        onChange={(e) => {
                          setLoginPassword(e.target.value);
                          setAuthError("");
                        }}
                        required
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

                  <button
                    className="submit-button"
                    type="submit"
                    disabled={authLoading}
                  >
                    {authLoading ? "Logging in..." : "Log in"}
                    {!authLoading && <span>?</span>}
                  </button>
                </form>

                <div className="auth-switch">
                  New here?
                  <button
                    type="button"
                    className="auth-switch-link"
                    onClick={() => handleSwitchMode("signup")}
                  >
                    Sign up ?
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
                    <FcGoogle size={19} />
                    <span>Continue with Google</span>
                  </button>

                  <button className="social-button" type="button">
                    <FaGithub size={18} />
                    <span>Continue with GitHub</span>
                  </button>
                </div>

                <div className="divider">
                  <span />
                  <p>or</p>
                  <span />
                </div>

                <form className="auth-form" onSubmit={handleSignupSubmit}>
                  <div className="form-group">
                    <label>Full name</label>
                    <div className="input-wrapper">
                      <UserRound size={17} />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={signupName}
                        onChange={(e) => {
                          setSignupName(e.target.value);
                          setAuthError("");
                        }}
                        required
                        minLength={2}
                        maxLength={80}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email address</label>
                    <div className="input-wrapper">
                      <Mail size={17} />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={signupEmail}
                        onChange={(e) => {
                          setSignupEmail(e.target.value);
                          setAuthError("");
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <div className="input-wrapper">
                      <Lock size={17} />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password (min 8 chars)"
                        value={signupPassword}
                        onChange={(e) => {
                          setSignupPassword(e.target.value);
                          setAuthError("");
                        }}
                        required
                        minLength={8}
                        maxLength={128}
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
                        value={signupConfirmPassword}
                        onChange={(e) => {
                          setSignupConfirmPassword(e.target.value);
                          setAuthError("");
                        }}
                        required
                        minLength={8}
                        maxLength={128}
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

                  <button
                    className="submit-button"
                    type="submit"
                    disabled={authLoading}
                  >
                    {authLoading ? "Creating account..." : "Create account"}
                    {!authLoading && <span>?</span>}
                  </button>
                </form>

                <div className="auth-switch">
                  Already have an account?
                  <button
                    type="button"
                    className="auth-switch-link"
                    onClick={() => handleSwitchMode("login")}
                  >
                    Log in ?
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
