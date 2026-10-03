import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    currentStatus: {
      type: String,
      default: "",
    },
    education: {
      level: { type: String, default: "" },
      degree: { type: String, default: "" },
      specialization: { type: String, default: "" },
      institution: { type: String, default: "" },
      graduationYear: { type: String, default: "" },
      cgpa: { type: String, default: "" },
    },
    careerGoal: {
      type: [String],
      default: [],
    },
    targetRoles: {
      type: [String],
      default: [],
    },
    experienceLevel: {
      type: String,
      default: "",
    },
    technicalSkills: {
      type: [String],
      default: [],
    },
    interviewFocus: {
      type: [String],
      default: [],
    },
    interviewExperience: {
      level: { type: Number, default: 3 },
      previousInterviews: { type: String, default: "" },
      challenges: { type: [String], default: [] },
    },
    communicationGoals: {
      type: [String],
      default: [],
    },
    preferences: {
      interviewMode: { type: String, default: "Both" },
      dailyPreparationTime: { type: String, default: "" },
      learningStyle: { type: String, default: "" },
      feedbackStyle: { type: String, default: "" },
    },
    jobPreferences: {
      workType: { type: String, default: "Any" },
      locations: { type: [String], default: [] },
      companyType: { type: String, default: "Any" },
      expectedSalary: { type: String, default: "" },
      targetCompanies: { type: [String], default: [] },
    },
    resume: {
      fileName: { type: String, default: "" },
      uploadedAt: { type: Date, default: null },
    },
    onboardingCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserProfile = mongoose.model("UserProfile", userProfileSchema);
