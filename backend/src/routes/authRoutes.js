import { Router } from "express";
import { signup, login, getMe, logout } from "../controllers/authController.js";
import { validate } from "../middleware/validate.js";
import { signupSchema, loginSchema } from "../validators/authValidators.js";
import { signupLimiter, loginLimiter } from "../middleware/rateLimiter.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/signup", signupLimiter, validate(signupSchema), signup);
router.post("/login", loginLimiter, validate(loginSchema), login);
router.get("/me", requireAuth, getMe);
router.post("/logout", logout);

export default router;
