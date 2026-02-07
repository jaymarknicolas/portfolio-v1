import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  FolderOpen,
  Award,
  Code2,
  Terminal,
} from "lucide-react";
import { SectionLink } from "./components/SectionLink";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StickyExperienceScroll } from "./components/StickyExperienceScroll";
import {
  StickyRevealSection,
  RevealItem,
} from "./components/StickyRevealSection";
import { MouseGlow } from "./components/MouseGlow";
import { RecommendationSlider } from "./components/RecommendationSlider";
import { techStack } from "./components/TechStack";
import { CertificationCard } from "./components/CertificationCard";
import { ProjectCard } from "./components/ProjectCard";
import { CTASection } from "./components/CTASection";
import { StaticGradientBackground } from "./components/GradientBackground";
import { TypingAnimation } from "./components/TypingAnimation";
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionHeading } from "./components/SectionHeading";
import { BackToTop } from "./components/BackToTop";

import { experiences } from "./data/experiences";
import { testimonials } from "./data/testimonials";
import { certifications } from "./data/certifications";
import { projects } from "./data/projects";

import RootLayout from "./components/RootLayout";

import { ThemeToggle } from "./components/ThemeToggle";
import { ResumeDownloadButton } from "./components/ResumeDownloadButton";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "UX/UI Designer",
  "Problem Solver",
];

export default function Portfolio() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Animated background */}
        <StaticGradientBackground />
        <MouseGlow />

        {/* Grid background pattern */}
        <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Back to top button */}
        <BackToTop />

        {/* Header Navigation */}
        <nav className="fixed top-0 left-0 right-0 px-4 z-50 flex mt-4 gap-2 !text-sm justify-end w-full items-center">
          <div className="right-4 gap-2 glass-card p-2 rounded-full flex">
            <ResumeDownloadButton />
            <a href="mailto:jaymarknicolas.dev@gmail.com">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-[#FF4D00] hover:bg-[#FF4D00]/10 rounded-tr-full rounded-br-full transition-all duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </a>
          </div>
          <ThemeToggle />
        </nav>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* ===== HERO - Centered & Bold ===== */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-24 pb-8 flex flex-col items-center text-center min-h-[80vh] justify-center"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mb-6"
            >
              <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full overflow-hidden mx-auto relative ring-2 ring-[#FF4D00]/20 ring-offset-4 ring-offset-background">
                <img
                  src="./portfolio-v1.webp"
                  alt="Jay Mark Nicolas"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass-card text-xs font-mono font-medium whitespace-nowrap border border-green-500/30"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-500">online</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-foreground tracking-tight">
                Jay Mark Nicolas
              </h1>
              <div className="flex items-center text-muted-foreground text-sm mt-2 justify-center gap-1 font-mono">
                <MapPin className="h-3.5 w-3.5 text-[#FF4D00]" />
                <span>Bukidnon, Philippines</span>
              </div>
            </motion.div>

            {/* Typing Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5"
            >
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
                <span className="text-muted-foreground">I'm a </span>
                <TypingAnimation
                  texts={roles}
                  className="gradient-text"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2500}
                />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-sm md:text-base max-w-xl mt-4 leading-relaxed"
            >
              Building high-performance, scalable web applications with a focus
              on exceptional user experiences and clean code.
            </motion.p>

            {/* Social/CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 mt-6 flex-wrap justify-center"
            >
              <a
                href="https://github.com/jaymarknicolas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group font-mono text-xs"
                >
                  <Github className="h-4 w-4 mr-1.5 group-hover:text-[#FF4D00] transition-colors" />
                  github
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/jay-mark-nicolas-157621258/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group font-mono text-xs"
                >
                  <Linkedin className="h-4 w-4 mr-1.5 group-hover:text-[#FF4D00] transition-colors" />
                  linkedin
                </Button>
              </a>
              <a href="mailto:jaymarknicolas.dev@gmail.com">
                <Button
                  size="sm"
                  className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white transition-all duration-300 font-mono text-xs"
                >
                  <Mail className="h-4 w-4 mr-1.5" />
                  get_in_touch()
                </Button>
              </a>
            </motion.div>

            {/* Terminal-style stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 w-full max-w-2xl"
            >
              <div className="terminal-card">
                <div className="terminal-card-header">
                  <span className="terminal-dot bg-red-500/80" />
                  <span className="terminal-dot bg-yellow-500/80" />
                  <span className="terminal-dot bg-green-500/80" />
                  <span className="font-mono text-[10px] text-muted-foreground ml-2">
                    ~/stats
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
                  {[
                    { label: "experience", value: "4+ yrs" },
                    { label: "projects", value: "20+" },
                    { label: "tech_stack", value: "15+" },
                    { label: "response", value: "<24h" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="px-4 py-3 text-center"
                    >
                      <div className="font-mono text-lg font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ===== ABOUT - Sticky Reveal ===== */}
          <StickyRevealSection
            header={<SectionHeading label="about" title="Get to Know Me" />}
            itemCount={2}
            heightPerItem={70}
          >
            {(progress) => (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RevealItem
                  index={0}
                  total={2}
                  progress={progress}
                  className="md:col-span-2"
                >
                  <div className="terminal-card h-full">
                    <div className="terminal-card-header">
                      <span className="terminal-dot bg-red-500/80" />
                      <span className="terminal-dot bg-yellow-500/80" />
                      <span className="terminal-dot bg-green-500/80" />
                      <span className="font-mono text-[10px] text-muted-foreground ml-2">
                        about.md
                      </span>
                    </div>
                    <div className="p-5 space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        I'm a full-stack software engineer specializing in
                        building scalable and maintainable applications across
                        all platforms. I focus on creating practical solutions
                        that balance performance, reliability, and clean
                        integration across the stack, turning complex
                        requirements into functional, user-centric systems.
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        I actively pursue side projects and experiment with new
                        tools and workflows to sharpen problem-solving skills
                        and adapt quickly to evolving technical challenges. I
                        bring a mindset of discipline, resilience, and
                        continuous improvement—qualities that help me contribute
                        effectively in fast-paced, collaborative, and remote
                        environments.
                      </p>
                    </div>
                  </div>
                </RevealItem>

                <RevealItem index={1} total={2} progress={progress}>
                  <div className="flex flex-col gap-4">
                    <div className="terminal-card flex-1">
                      <div className="p-4 flex items-center gap-3">
                        <Terminal className="h-4 w-4 text-[#FF4D00] flex-shrink-0" />
                        <div>
                          <div className="font-mono text-xs font-semibold text-foreground">
                            Full-Stack Engineer
                          </div>
                          <div className="font-mono text-[10px] text-muted-foreground">
                            React / Laravel / Node.js
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="terminal-card flex-1">
                      <div className="p-4 flex items-center gap-3">
                        <Code2 className="h-4 w-4 text-[#FF4D00] flex-shrink-0" />
                        <div>
                          <div className="font-mono text-xs font-semibold text-foreground">
                            Open Source
                          </div>
                          <div className="font-mono text-[10px] text-muted-foreground">
                            Active contributor
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="terminal-card flex-1">
                      <div className="p-4">
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Beyond code — trail running & hiking across the
                          Philippines. Discipline and resilience from the
                          mountains.
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealItem>
              </div>
            )}
          </StickyRevealSection>

          {/* ===== PROJECTS - Sticky Reveal ===== */}
          <StickyRevealSection
            id="recent-projects-section"
            header={<SectionHeading label="work" title="Featured Projects" />}
            itemCount={4}
            heightPerItem={60}
          >
            {(progress) => (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.slice(0, 3).map((project, index) => (
                    <RevealItem
                      key={index}
                      index={index}
                      total={4}
                      progress={progress}
                    >
                      <ProjectCard project={project} index={index} />
                    </RevealItem>
                  ))}
                </div>
                <RevealItem
                  index={3}
                  total={4}
                  progress={progress}
                  className="mt-6 text-center"
                >
                  <SectionLink
                    to="/all-projects"
                    sectionId="recent-projects-section"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group font-mono text-xs"
                    >
                      <FolderOpen className="h-3.5 w-3.5 mr-1.5 group-hover:text-[#FF4D00] transition-colors" />
                      view_all_projects()
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </SectionLink>
                </RevealItem>
              </>
            )}
          </StickyRevealSection>

          {/* ===== TECH STACK - Sticky Reveal by Category ===== */}
          <StickyRevealSection
            id="tech-stack-section"
            header={
              <div className="flex justify-between items-start">
                <SectionHeading label="skills" title="Tech Stack" />
                <SectionLink to="/tech-stack" sectionId="tech-stack-section">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group font-mono text-xs"
                  >
                    <Code2 className="h-3.5 w-3.5 mr-1.5 group-hover:text-[#FF4D00] transition-colors" />
                    explore()
                  </Button>
                </SectionLink>
              </div>
            }
            itemCount={4}
            heightPerItem={55}
          >
            {(progress) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Frontend", category: "frontend" as const },
                  { label: "Backend", category: "backend" as const },
                  { label: "Database", category: "database" as const },
                  { label: "Tools & Platforms", category: "tools" as const },
                ].map((group, index) => (
                  <RevealItem
                    key={group.category}
                    index={index}
                    total={4}
                    progress={progress}
                  >
                    <div className="glass-card rounded-xl p-4 h-full">
                      <h3 className="text-xs font-semibold font-mono text-[#FF4D00] mb-3 flex items-center gap-2 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-[#FF4D00] rounded-full" />
                        {group.label}
                        <span className="text-muted-foreground font-normal">
                          ({techStack.filter((t) => t.category === group.category).length})
                        </span>
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {techStack
                          .filter((t) => t.category === group.category)
                          .map((tech) => (
                            <span
                              key={tech.name}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-[#FF4D00]/5 hover:border-[#FF4D00]/30 border border-transparent transition-all duration-300 cursor-default"
                            >
                              <span className="text-[#FF4D00]">{tech.icon}</span>
                              {tech.name}
                            </span>
                          ))}
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </div>
            )}
          </StickyRevealSection>

          {/* ===== EXPERIENCE - Sticky Scroll (custom) ===== */}
          <section id="experience-section">
            <StickyExperienceScroll experiences={experiences} />
          </section>

          {/* ===== CERTIFICATIONS - Sticky Reveal ===== */}
          <StickyRevealSection
            header={
              <div className="flex justify-between items-start">
                <SectionHeading label="credentials" title="Certifications" />
                {certifications && certifications.length > 3 && (
                  <SectionLink
                    to="/certifications"
                    sectionId="experience-section"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group font-mono text-xs"
                    >
                      <Award className="h-3.5 w-3.5 mr-1.5 group-hover:text-[#FF4D00] transition-colors" />
                      view_all()
                    </Button>
                  </SectionLink>
                )}
              </div>
            }
            itemCount={Math.min(certifications.length, 4)}
            heightPerItem={60}
          >
            {(progress) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.slice(0, 4).map((cert, index) => (
                  <RevealItem
                    key={index}
                    index={index}
                    total={Math.min(certifications.length, 4)}
                    progress={progress}
                  >
                    <CertificationCard certification={cert} />
                  </RevealItem>
                ))}
              </div>
            )}
          </StickyRevealSection>

          {/* ===== TESTIMONIALS - Sticky Reveal ===== */}
          <StickyRevealSection
            header={
              <SectionHeading label="testimonials" title="What People Say" />
            }
            itemCount={1}
            heightPerItem={90}
          >
            {(progress) => (
              <RevealItem index={0} total={1} progress={progress}>
                <RecommendationSlider testimonials={testimonials} />
              </RevealItem>
            )}
          </StickyRevealSection>

          {/* ===== CTA ===== */}
          <CTASection />

          {/* ===== FOOTER ===== */}
          <footer className="text-center py-6 border-t border-border/30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex justify-center gap-3">
                <a
                  href="https://github.com/jaymarknicolas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300"
                >
                  <Github className="h-4 w-4 text-muted-foreground hover:text-[#FF4D00]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jay-mark-nicolas-157621258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-[#FF4D00]" />
                </a>
                <a
                  href="mailto:jaymarknicolas.dev@gmail.com"
                  className="p-2 rounded-lg glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300"
                >
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-[#FF4D00]" />
                </a>
              </div>
              <p className="text-muted-foreground text-xs font-mono">
                &copy; {new Date().getFullYear()} Jay Mark Nicolas
                <span className="text-[#FF4D00] mx-2">|</span>
                Crafted with passion
              </p>
            </motion.div>
          </footer>
        </div>
      </div>
    </RootLayout>
  );
}
