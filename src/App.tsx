import {
  MapPin,
  Calendar,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { RecommendationSlider } from "./components/RecommendationSlider";
import { TechStack } from "./components/TechStack";
import { CertificationCard } from "./components/CertificationCard";
import { ProjectCard } from "./components/ProjectCard";
import { Roadmap } from "./components/Roadmap";
import { CTASection } from "./components/CTASection";
import { StaticGradientBackground } from "./components/GradientBackground";
import { TypingAnimation } from "./components/TypingAnimation";
import { ScrollProgress, AnimatedSection } from "./components/ScrollProgress";
import { SectionHeading } from "./components/SectionHeading";
import { BackToTop } from "./components/BackToTop";
import { SkillsProgress } from "./components/SkillsProgress";
import { GitHubStats } from "./components/GitHubStats";
import { Services } from "./components/Services";
import { BlogArticles } from "./components/BlogArticles";

import { experiences } from "./data/experiences";
import { testimonials } from "./data/testimonials";
import { certifications } from "./data/certifications";
import { projects } from "./data/projects";
import { roadmapItems } from "./data/roadmap";

import RootLayout from "./components/RootLayout";
import CertificationsDrawer from "./components/drawers/CertificationsDrawer";
import ProjectsDrawer from "./components/drawers/ProjectsDrawer";

import { ThemeToggle } from "./components/ThemeToggle";

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

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Back to top button */}
        <BackToTop />

        {/* Header Navigation */}
        <nav className="fixed top-0 left-0 right-0 px-4 z-50 flex mt-4 gap-2 !text-sm justify-end w-full items-center">
          <div className="right-4 gap-2 glass-card p-2 rounded-full flex">
            <a
              href="https://drive.google.com/file/d/1Tl5C3CGmirK4Y9MnmSPdi_UKoGCU3xrV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-[#FF4D00] hover:bg-[#FF4D00]/10 rounded-tl-full rounded-bl-full rounded-tr-md rounded-br-md transition-all duration-300"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </a>
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

        <div className="max-w-7xl mx-auto px-4 py-8 grid gap-16 relative z-10">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-24 flex gap-8 flex-col min-h-[85vh] justify-center"
          >
            <Card className="w-full bg-transparent border-none shadow-none overflow-hidden flex items-center h-full flex-col gap-8 rounded-none md:flex-row md:gap-12">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex-shrink-0"
              >
                <div
                  className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[280px] lg:h-[280px] rounded-2xl overflow-hidden mx-auto relative glow-orange"
                  style={{
                    background:
                      "linear-gradient(220.21deg, #691E02 3.31%, #C24617 63.27%)",
                  }}
                >
                  <img
                    src="./portfolio-v1.webp"
                    alt="Jay Mark Nicolas"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass-card border-gradient text-sm font-medium whitespace-nowrap"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Available for work
                  </span>
                </motion.div>
              </motion.div>

              {/* Hero Content */}
              <CardContent className="p-0 md:p-6 flex-1 space-y-4 flex flex-col justify-center text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl text-foreground">
                    Jay Mark Nicolas
                  </h1>
                  <div className="flex items-center text-muted-foreground text-sm md:text-base mt-2 justify-center md:justify-start">
                    <MapPin className="h-4 w-4 mr-1 text-[#FF4D00]" />
                    Cagayan de Oro, Philippines
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="my-4"
                >
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">
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

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground text-base md:text-lg max-w-xl"
                >
                  Building high-performance, scalable web applications with a
                  focus on exceptional user experiences and clean code.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3 mt-6 flex-wrap justify-center md:justify-start"
                >
                  <a
                    href="https://github.com/jaymarknicolas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
                    >
                      <Github className="h-5 w-5 mr-2 group-hover:text-[#FF4D00] transition-colors" />
                      Github
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jay-mark-nicolas-157621258/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
                    >
                      <Linkedin className="h-5 w-5 mr-2 group-hover:text-[#FF4D00] transition-colors" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href="mailto:jaymarknicolas.dev@gmail.com">
                    <Button
                      size="lg"
                      className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white shadow-lg shadow-[#FF4D00]/30 transition-all duration-300"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Get in Touch
                    </Button>
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.section>

          {/* About and Tech Stack Section */}
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="glass-card glass-card-hover border-gradient">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF4D00] rounded-full" />
                    About Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    I’m a full-stack software engineer specializing in building
                    scalable and maintainable applications across all platforms.
                    I focus on creating practical solutions that balance
                    performance, reliability, and clean integration across the
                    stack, turning complex requirements into functional,
                    user-centric systems.
                  </p>
                  <p className="text-muted-foreground">
                    I actively pursue side projects and experiment with new
                    tools and workflows to sharpen problem-solving skills and
                    adapt quickly to evolving technical challenges. I bring a
                    mindset of discipline, resilience, and continuous
                    improvement—qualities that help me contribute effectively in
                    fast-paced, collaborative, and remote environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card glass-card-hover border-gradient">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF4D00] rounded-full" />
                    Beyond Coding
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Beyond code, I focus on continuous learning, hands-on
                    experimentation, and side projects to sharpen
                    problem-solving skills and stay adaptable. I also enjoy
                    trail running and hiking in the Philippines, activities that
                    reinforce discipline, resilience, and a mindset of pushing
                    beyond comfort zones—qualities I carry into my professional
                    work.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tech Stack Section */}
            <div>
              <SectionHeading
                title="TECH STACK"
                subtitle="Technologies I Work With"
              />
              <TechStack />
            </div>
          </AnimatedSection>

          {/* Services Section */}
          <AnimatedSection>
            <SectionHeading title="Services" subtitle="What I Offer" />
            <Services />
          </AnimatedSection>

          {/* Recent Projects Section - Moved up for better UX */}
          <AnimatedSection>
            <div className="flex justify-between items-start mb-8">
              <SectionHeading title="RECENT" subtitle="PROJECTS" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <ProjectsDrawer />
            </motion.div>
          </AnimatedSection>

          {/* Skills Progress Section */}
          <AnimatedSection>
            <SectionHeading title="Skills" subtitle="Proficiency Levels" />
            <SkillsProgress />
          </AnimatedSection>

          {/* Experience and Certifications Grid */}
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div>
              <SectionHeading
                title="My Journey"
                subtitle="Experience & Education"
              />
              <div className="mt-6">
                <ExperienceTimeline experiences={experiences} />
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <SectionHeading title="Certifications" subtitle="Credentials" />
                {certifications && certifications.length > 3 && (
                  <CertificationsDrawer />
                )}
              </div>
              <div className="space-y-4">
                {certifications.slice(0, 4).map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CertificationCard certification={cert} />
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Recommendations Section */}
          <AnimatedSection>
            <SectionHeading
              title="Recommendations"
              subtitle="What People Say"
            />
            <RecommendationSlider testimonials={testimonials} />
          </AnimatedSection>

          {/* GitHub Stats Section */}
          <AnimatedSection>
            <SectionHeading title="GitHub" subtitle="Activity & Stats" />
            <GitHubStats username="jaymarknicolas" />
          </AnimatedSection>

          {/* Roadmap Section */}
          <AnimatedSection>
            <SectionHeading title="Roadmap" subtitle="Learning & Goals" />
            <Roadmap items={roadmapItems} />
          </AnimatedSection>

          {/* Blog/Articles Section */}
          {/* <AnimatedSection>
            <SectionHeading title="Blog" subtitle="Latest Articles" />
            <BlogArticles username="jaymarknicolas" showFallback={true} />
          </AnimatedSection> */}

          {/* CTA Section */}
          <CTASection />

          {/* Footer */}
          <footer className="text-center py-8 border-t border-border/50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/jaymarknicolas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-muted-foreground hover:text-[#FF4D00]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jay-mark-nicolas-157621258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-[#FF4D00]" />
                </a>
                <a
                  href="mailto:jaymarknicolas.dev@gmail.com"
                  className="p-2 rounded-full glass-card hover:border-[#FF4D00]/50 hover:bg-[#FF4D00]/5 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 text-muted-foreground hover:text-[#FF4D00]" />
                </a>
              </div>
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Jay Mark Nicolas. Crafted with
                passion.
              </p>
            </motion.div>
          </footer>
        </div>
      </div>
    </RootLayout>
  );
}
