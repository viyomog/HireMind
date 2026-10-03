import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.js'
import { Layout } from './components/layout/Layout.js'
import { LandingPage } from './pages/LandingPage.js'
import AuthPage from './pages/AuthPage.js'
import loginImage from './assets/hiremind-login.png'
import signupImage from './assets/hiremind-signup.png'

if (typeof window !== 'undefined') {
  const img1 = new Image()
  img1.src = loginImage
  const img2 = new Image()
  img2.src = signupImage
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route element={<AuthPage />}>
            <Route path="/login" element={null} />
            <Route path="/signup" element={null} />
          </Route>
          <Route path="*" element={<Layout><LandingPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
