import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, FileText, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeDownloadButtonLarge() {
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
      }, 2500);
    }, 1000);
  };

  return (
    <Button
      size="lg"
      variant="outline"
      onClick={handleDownload}
      disabled={downloadState === "downloading"}
      className="relative border-border hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group overflow-hidden min-w-[200px]"
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
              className="relative mr-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FileText className="h-5 w-5 group-hover:text-[#FF4D00] transition-colors" />
              <motion.div
                className="absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-3 w-3 text-[#FF4D00]" />
              </motion.div>
            </motion.div>
            <span>Download Resume</span>
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
            {/* Animated download icon */}
            <motion.div className="relative mr-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Download className="h-5 w-5 text-[#FF4D00]" />
              </motion.div>
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
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="mr-2"
            >
              <Check className="h-5 w-5" />
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
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4D00] to-[#FF6B35] origin-left"
          />
        )}
      </AnimatePresence>

      {/* Success ripple effect */}
      <AnimatePresence>
        {downloadState === "complete" && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-green-500 rounded-md"
            />
            {/* Confetti-like particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1
                }}
                animate={{
                  x: (i % 2 === 0 ? 1 : -1) * (20 + Math.random() * 30),
                  y: -20 - Math.random() * 20,
                  scale: 0,
                  opacity: 0
                }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#FF4D00' : '#FF6B35'
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </Button>
  );
}
