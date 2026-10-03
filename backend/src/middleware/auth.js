import { getSession, destroySession } from "../services/sessionService.js";
import { User } from "../models/User.js";

export async function requireAuth(req, res, next) {
  const sessionId = req.cookies?.sessionId;

  if (!sessionId) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    const session = await getSession(sessionId);
    if (!session || !session.userId) {
      res.clearCookie("sessionId");
      return res.status(401).json({ error: "Session expired or invalid" });
    }

    const user = await User.findById(session.userId);
    if (!user) {
      await destroySession(sessionId);
      res.clearCookie("sessionId");
      return res.status(401).json({ error: "User no longer exists" });
    }

    req.user = user;
    req.sessionId = sessionId;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({ error: "Authentication service error" });
  }
}

export function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden. Admin access required." });
  }
  next();
}
