import { UserProfile } from "../models/UserProfile.js";
import { User } from "../models/User.js";

export async function saveOnboarding(req, res) {
  try {
    const userId = req.user._id;
    const data = req.body;

    const profile = await UserProfile.findOneAndUpdate(
      { userId },
      {
        ...data,
        userId,
        onboardingCompleted: true,
      },
      { upsert: true, new: true, runValidators: true }
    );

    await User.findByIdAndUpdate(userId, { onboardingCompleted: true });

    return res.status(200).json({
      success: true,
      message: "Onboarding profile saved successfully",
      profile,
    });
  } catch (error) {
    console.error("Save onboarding error:", error);
    return res.status(500).json({ error: "Failed to save onboarding profile" });
  }
}

export async function getOnboarding(req, res) {
  try {
    const userId = req.user._id;
    const profile = await UserProfile.findOne({ userId });

    return res.status(200).json({
      profile: profile || null,
      onboardingCompleted: profile?.onboardingCompleted || false,
    });
  } catch (error) {
    console.error("Get onboarding error:", error);
    return res.status(500).json({ error: "Failed to load onboarding profile" });
  }
}
