import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { saveOnboarding, getOnboarding } from "../controllers/onboardingController.js";

const router = Router();

router.get("/", requireAuth, getOnboarding);
router.post("/", requireAuth, saveOnboarding);

export default router;
