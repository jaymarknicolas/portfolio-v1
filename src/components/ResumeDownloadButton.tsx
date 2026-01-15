import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeDownloadButton() {
  const [downloadState, setDownloadState] = useState<
    "idle" | "downloading" | "complete"
  >("idle");

  const handleDownload = async () => {
    if (downloadState !== "idle") return;

    setDownloadState("downloading");

    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/files/RESUME - JAY MARK NICOLAS.pdf";
    link.download = "Jay_Mark_Nicolas_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Simulate download progress for visual feedback
    setTimeout(() => {
      setDownloadState("complete");

      // Reset after showing success
      setTimeout(() => {
        setDownloadState("idle");
      }, 2000);
    }, 800);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleDownload}
      disabled={downloadState === "downloading"}
      className="relative text-foreground hover:text-[#FF4D00] hover:bg-[#FF4D00]/10 rounded-tl-full rounded-bl-full rounded-tr-md rounded-br-md transition-all duration-300 overflow-hidden group min-w-[110px]"
    >
      <AnimatePresence mode="wait">
        {downloadState === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FileText className="h-4 w-4 mr-2 group-hover:text-[#FF4D00] transition-colors" />
            </motion.div>
            <span>Resume</span>
            <motion.div
              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Download className="h-3 w-3" />
            </motion.div>
          </motion.div>
        )}

        {downloadState === "downloading" && (
          <motion.div
            key="downloading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              <svg
                className="h-4 w-4 text-[#FF4D00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeOpacity="0.25"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            <span className="text-[#FF4D00]">Downloading...</span>
          </motion.div>
        )}

        {downloadState === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center text-green-500"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.4 }}
            >
              <Check className="h-4 w-4 mr-2" />
            </motion.div>
            <span>Downloaded!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar animation */}
      <AnimatePresence>
        {downloadState === "downloading" && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF4D00] origin-left"
          />
        )}
      </AnimatePresence>

      {/* Success pulse effect */}
      <AnimatePresence>
        {downloadState === "complete" && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
        )}
      </AnimatePresence>
    </Button>
  );
}
