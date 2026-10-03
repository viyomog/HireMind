import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.js'
import { AuthProvider } from './context/AuthContext.js'
import { Layout } from './components/layout/Layout.js'
import { LandingPage } from './pages/LandingPage.js'
import AuthPage from './pages/AuthPage.js'
import OnboardingPage from './pages/onboarding/OnboardingPage.js'
import loginImage from './assets/hiremind-login.png'
import signupImage from './assets/hiremind-signup.png'
import onboardingImage from './assets/onboarding.png'

if (typeof window !== 'undefined') {
  const img1 = new Image()
  img1.src = loginImage
  const img2 = new Image()
  img2.src = signupImage
  const img3 = new Image()
  img3.src = onboardingImage
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
            </Route>
            <Route element={<AuthPage />}>
              <Route path="/login" element={null} />
              <Route path="/signup" element={null} />
            </Route>
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="*" element={<Layout><LandingPage /></Layout>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}