import crypto from "crypto";
import Redis from "ioredis";

const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

let redisClient = null;
const memoryStore = new Map();

if (process.env.REDIS_URL) {
  try {
    redisClient = new Redis(process.env.REDIS_URL, {
      maxRetriesPerRequest: 3,
      retryStrategy(times) {
        return Math.min(times * 100, 3000);
      },
    });

    redisClient.on("connect", () => {
      console.log("Redis connected successfully");
    });

    redisClient.on("error", (err) => {
      console.warn("Redis error (falling back to memory store):", err.message);
    });
  } catch (err) {
    console.warn("Could not initialize Redis, using memory store:", err.message);
    redisClient = null;
  }
} else {
  console.log("REDIS_URL not provided. Using in-memory session store.");
}

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

  const serialized = JSON.stringify(sessionData);

  if (redisClient && redisClient.status === "ready") {
    try {
      await redisClient.setex(`session:${sessionId}`, ttlSeconds, serialized);
      return sessionId;
    } catch (err) {
      console.warn("Redis write failed, falling back to memory:", err.message);
    }
  }

  const expiresAt = Date.now() + ttlSeconds * 1000;
  memoryStore.set(sessionId, { data: sessionData, expiresAt });
  return sessionId;
}

export async function getSession(sessionId) {
  if (!sessionId) return null;

  if (redisClient && redisClient.status === "ready") {
    try {
      const raw = await redisClient.get(`session:${sessionId}`);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      console.warn("Redis read failed, checking memory:", err.message);
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

  if (redisClient && redisClient.status === "ready") {
    try {
      await redisClient.del(`session:${sessionId}`);
    } catch (err) {
      console.warn("Redis delete error:", err.message);
    }
  }

  memoryStore.delete(sessionId);
}
