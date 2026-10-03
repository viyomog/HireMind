import argon2 from "argon2";
import { User } from "../models/User.js";
import { createSession, destroySession } from "../services/sessionService.js";

const COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days

function getCookieOptions() {
  const isProd = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  };
}

export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ error: "An account with this email already exists" });
    }

    const passwordHash = await argon2.hash(password, {
      type: argon2.argon2id,
    });

    const user = await User.create({
      name,
      email: normalizedEmail,
      passwordHash,
    });

    const sessionId = await createSession(user._id, {
      email: user.email,
      role: user.role,
    });

    res.cookie("sessionId", sessionId, getCookieOptions());

    return res.status(201).json({
      message: "Account created successfully",
      user: user.toSafeObject(),
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Could not create account. Please try again." });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: normalizedEmail });
    if (!user || !user.passwordHash) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await argon2.verify(user.passwordHash, password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    user.lastLoginAt = new Date();
    await user.save();

    const sessionId = await createSession(user._id, {
      email: user.email,
      role: user.role,
    });

    res.cookie("sessionId", sessionId, getCookieOptions());

    return res.status(200).json({
      message: "Login successful",
      user: user.toSafeObject(),
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Authentication failed. Please try again." });
  }
}

export async function getMe(req, res) {
  return res.status(200).json({
    user: req.user.toSafeObject(),
  });
}

export async function logout(req, res) {
  try {
    const sessionId = req.cookies?.sessionId || req.sessionId;
    if (sessionId) {
      await destroySession(sessionId);
    }

    const isProd = process.env.NODE_ENV === "production";
    res.clearCookie("sessionId", {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? "none" : "lax",
      path: "/",
    });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ error: "Logout failed" });
  }
}
