import crypto from "crypto";
import redis from "../config/redis.js";

const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days
const memoryStore = new Map();

function generateSessionId() {
  return crypto.randomBytes(32).toString("hex");
}

export async function createSession(userId, data = {}, ttlSeconds = DEFAULT_TTL_SECONDS) {
  const sessionId = generateSessionId();
  const sessionData = {
    userId: userId.toString(),
    ...data,
    createdAt: new Date().toISOString(),
  };

  if (redis) {
    try {
      await redis.set(`session:${sessionId}`, sessionData, { ex: ttlSeconds });
      return sessionId;
    } catch (err) {
      console.warn("Upstash Redis set error, falling back to memory:", err.message);
    }
  }

  const expiresAt = Date.now() + ttlSeconds * 1000;
  memoryStore.set(sessionId, { data: sessionData, expiresAt });
  return sessionId;
}

export async function getSession(sessionId) {
  if (!sessionId) return null;

  if (redis) {
    try {
      const data = await redis.get(`session:${sessionId}`);
      if (!data) return null;
      return typeof data === "string" ? JSON.parse(data) : data;
    } catch (err) {
      console.warn("Upstash Redis get error, checking memory fallback:", err.message);
    }
  }

  const item = memoryStore.get(sessionId);
  if (!item) return null;

  if (Date.now() > item.expiresAt) {
    memoryStore.delete(sessionId);
    return null;
  }

  return item.data;
}

export async function destroySession(sessionId) {
  if (!sessionId) return;

  if (redis) {
    try {
      await redis.del(`session:${sessionId}`);
    } catch (err) {
      console.warn("Upstash Redis del error:", err.message);
    }
  }

  memoryStore.delete(sessionId);
}
