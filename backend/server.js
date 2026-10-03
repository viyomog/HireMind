import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import onboardingRoutes from "./src/routes/onboardingRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(helmet());

const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",").map((url) => url.trim().replace(/\/$/, ""))
  : ["http://localhost:5173", "http://localhost:5174"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      const isAllowed =
        allowedOrigins.includes(origin) ||
        allowedOrigins.includes("*") ||
        process.env.NODE_ENV !== "production";
      if (isAllowed) {
        return callback(null, true);
      }
      return callback(new Error("CORS not allowed for this origin"));
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use(cookieParser(process.env.SESSION_SECRET || "hiremind-secret"));

app.use("/api/auth", authRoutes);
app.use("/api/onboarding", onboardingRoutes);

app.get("/", (req, res) => {
  res.json({
    name: "HireMind API",
    status: "online",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
