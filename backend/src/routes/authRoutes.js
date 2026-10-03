import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login endpoint ready for implementation" });
});

router.post("/signup", (req, res) => {
  res.json({ message: "Signup endpoint ready for implementation" });
});

export default router;
