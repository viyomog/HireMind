import React, { useState, useRef } from "react";
import { UploadCloud, FileText, CheckCircle2, X, ArrowDown, Sparkles, AlertCircle } from "lucide-react";

export function ScreenResume({ resume = {}, onResumeChange, onSkip }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateAndSetFile = (file) => {
    setUploadError("");
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];

    const isPdfOrDoc =
      allowedTypes.includes(file.type) ||
      file.name.endsWith(".pdf") ||
      file.name.endsWith(".docx") ||
      file.name.endsWith(".doc");

    if (!isPdfOrDoc) {
      setUploadError("Please upload a PDF or DOCX file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setUploadError("File size exceeds 10 MB limit.");
      return;
    }

    onResumeChange({
      fileName: file.name,
      fileSize: (file.size / (1024 * 1024)).toFixed(2) + " MB",
      uploadedAt: new Date().toISOString(),
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    onResumeChange({});
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const pipelineSteps = [
    { title: "Skills", desc: "Technical & soft skills parsed" },
    { title: "Projects", desc: "Architectural context extracted" },
    { title: "Experience", desc: "Past roles & metrics indexed" },
    { title: "Education", desc: "Degrees & coursework linked" },
    { title: "Certifications", desc: "Verified credentials" },
    { title: "Achievements", desc: "Awards & competitions" },
  ];

  return (
    <div className="onboarding-screen-content">
      <div className="onboarding-category-badge">
        <span>📄</span>
        <span>Resume Parsing</span>
      </div>

      <h2 className="onboarding-screen-title">Already have a resume?</h2>
      <p className="onboarding-screen-desc">
        Upload your resume to supercharge HireMind's AI interviewer with your real projects and background.
      </p>

      {/* Drag & Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`onboarding-dropzone ${isDragging ? "dragging" : ""} ${resume.fileName ? "has-file" : ""}`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          accept=".pdf,.docx,.doc"
          className="hidden"
          style={{ display: "none" }}
        />

        {resume.fileName ? (
          <div className="onboarding-dropzone-uploaded">
            <div className="w-14 h-14 rounded-2xl bg-[#eafaf1] text-[#10b981] flex items-center justify-center">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h4 className="font-bold text-[#191729] dark:text-[#f8f7ff] text-base flex items-center gap-2 justify-center">
                <FileText size={18} className="text-[#6355ff]" />
                {resume.fileName}
              </h4>
              <p className="text-xs text-[#7c7895] mt-1">
                {resume.fileSize || "Uploaded"} • Ready for AI Parsing
              </p>
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="onboarding-remove-file-btn"
            >
              <X size={14} />
              <span>Remove File</span>
            </button>
          </div>
        ) : (
          <div className="onboarding-dropzone-content">
            <div className="onboarding-dropzone-icon">
              <UploadCloud size={32} className="text-[#6355ff]" />
            </div>
            <h4 className="text-base font-bold text-[#191729] dark:text-[#f8f7ff] mt-2">
              Drop your resume here
            </h4>
            <p className="text-xs text-[#7c7895] mt-1">
              PDF, DOCX • Max 10 MB
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="onboarding-choose-file-btn"
            >
              Choose File
            </button>
          </div>
        )}
      </div>

      {uploadError && (
        <div className="onboarding-upload-error animate-fade">
          <AlertCircle size={16} />
          <span>{uploadError}</span>
        </div>
      )}

      {/* AI Extraction Flowchart */}
      <div className="onboarding-resume-flow-card">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-[#6355ff]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#6355ff]">
            What HireMind extracts automatically
          </h4>
        </div>

        <div className="onboarding-pipeline-grid">
          {pipelineSteps.map((step, idx) => (
            <div key={step.title} className="onboarding-pipeline-item">
              <span className="onboarding-pipeline-badge">{idx + 1}</span>
              <div>
                <span className="font-semibold text-xs text-[#191729] dark:text-[#f8f7ff]">
                  {step.title}
                </span>
                <p className="text-[11px] text-[#7c7895]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}