import { Redis } from "@upstash/redis";

let redis = null;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redis = Redis.fromEnv();
    console.log("Upstash Redis REST client initialized successfully");
  } catch (err) {
    console.warn("Failed to initialize Upstash Redis client:", err.message);
    redis = null;
  }
}

export default redis;
