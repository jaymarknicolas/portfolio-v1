import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeDownloadButtonLarge } from "./ResumeDownloadButtonLarge";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 cta-gradient rounded-3xl" />

      {/* Animated orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF4D00]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FF6B35]/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative glass-card rounded-3xl p-8 md:p-12 border-gradient">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-[#FF4D00]" />
            <span className="text-sm font-medium text-[#FF4D00]">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="text-foreground">Let's Build</span>{" "}
            <span className="gradient-text">Something Amazing</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
          >
            I'm always excited to work on innovative projects and collaborate
            with forward-thinking teams. Whether you have a project in mind or
            just want to connect, let's start a conversation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="mailto:jaymarknicolas.dev@gmail.com">
              <Button
                size="lg"
                className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white shadow-lg shadow-[#FF4D00]/30 hover:shadow-xl hover:shadow-[#FF4D00]/40 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 mr-2" />
                Send me an Email
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <ResumeDownloadButtonLarge />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
