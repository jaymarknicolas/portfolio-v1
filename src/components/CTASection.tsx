import { motion } from "framer-motion";
import { Mail, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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

            <a
              href="https://drive.google.com/file/d/1Tl5C3CGmirK4Y9MnmSPdi_UKoGCU3xrV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Years Experience", value: "4+" },
                { label: "Projects Delivered", value: "20+" },
                { label: "Tech Stack", value: "15+" },
                { label: "Response Time", value: "<24h" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
