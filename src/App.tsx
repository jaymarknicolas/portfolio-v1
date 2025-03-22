import {
  MapPin,
  Calendar,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { RecommendationSlider } from "./components/RecommendationSlider";
import { BlogCard } from "./components/BlogCard";
import { TechStack } from "./components/TechStack";
import { CertificationCard } from "./components/CertificationCard";

import { experiences } from "./data/experiences";
import { testimonials } from "./data/testimonials";
import { blogPosts } from "./data/blog-posts";
import { certifications } from "./data/certifications";
import { projects } from "./data/projects";

import RootLayout from "./components/RootLayout";

export default function Portfolio() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Header Navigation */}
        <nav className="fixed top-0 right-4 z-50 flex gap-2 bg-[#1A1A1A]/90 backdrop-blur-sm p-2 rounded-full mt-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white hover:bg-white/10  rounded-tl-full rounded-bl-full rounded-tr-md rounded-br-md "
          >
            <Calendar className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
          <a href="mailto:jmnicolas4me@gmail.com">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white hover:bg-white/10 rounded-tr-full rounded-br-full"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
          </a>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8 grid gap-24  relative z-10">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-16 flex gap-8 flex-col md:flex-row"
          >
            <Card className="md:bg-[#1A1A1A] w-full bg-transparent border-none border-[#2A2A2A] overflow-hidden basis-1/3 flex justify-end h-full self-end flex-row md:flex-col rounded-none md:rounded-lg sm:gap-4">
              <img
                src="./profile.png"
                alt="J.M. Nicolas"
                className="md:w-full object-cover md:flex-1 w-[100px] sm:w-[150px] rounded-md md:rounded-none"
              />
              <CardContent className="p-2 md:p-4 basis-[60%] flex-1 space-y-2">
                <h1 className="font-bold text-lg text-white">J.M. Nicolas</h1>
                <div className="flex items-center text-gray-300 text-xs lg:text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  Cagayan de Oro, Philippines
                </div>
                <div className="uppercase space-y-5  md:hidden">
                  <h2 className="text-xs text-white capitalize">
                    Software Engineer & Aspiring UX/UI Designer
                  </h2>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <a
                    href="https://github.com/jaymarknicolas?tab=overview&from=2025-01-01&to=2025-01-16"
                    target="_blank"
                    className=" md:flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-[#2A2A2A] hover:bg-white/5 hover:text-white"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Github
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jay-mark-nicolas-157621258/"
                    target="_blank"
                    className=" md:flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-[#2A2A2A] hover:bg-white/5 hover:text-white"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className=" basis-1/3 flex flex-col gap-8 flex-1 space-y-2 justify-start">
              <div className="uppercase space-y-2 xl:space-y-5 hidden md:block">
                <h1 className="text-4xl lg:text-6xl xl:text-8xl font-bold text-white">
                  SOFTWARE
                  <br className="lg:block hidden" />{" "}
                  <span className=" font-bold text-[#4A4A4A]">ENGINEER</span>
                </h1>

                {/* <p className="text-gray-300 mt-4 text-2xl font-bold tracking-wider">
                  <span className="text-[#4A4A4A]"> & </span>
                  ASPIRING
                  <span className="text-[#4A4A4A]"> UX/UI DESIGNER</span>
                </p> */}
              </div>

              <div className="flex flex-wrap justify-between gap-4">
                <div>
                  <div className="text-2xl lg:text-5xl font-bold text-white">
                    +3
                  </div>
                  <div className="text-xs lg:text-lg text-gray-300">
                    Years of Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl lg:text-5xl font-bold text-white">
                    +5
                  </div>
                  <div className="text-xs lg:text-lg text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl lg:text-5xl font-bold text-white">
                    +5
                  </div>
                  <div className="text-xs lg:text-lg text-gray-300">
                    Happy Clients
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#FF4D00] border-0 hover:bg-[#FF4D00]/90 transition-colors  h-fit md:h-[200px]">
                  <CardContent className="p-4">
                    <div className="w-8 h-8 border-2 border-white/90 flex items-center justify-center mb-8">
                      <span className="text-white">D</span>
                    </div>
                    <h3 className="font-bold text-white text-sm md:text-2xl">
                      LOREM IPSUM
                    </h3>
                    <p className="text-white/90  text-xs md:text-sm">
                      MOTION DESIGN
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#9EFF00] border-0 hover:bg-[#9EFF00]/90 transition-colors h-fit md:h-[200px]">
                  <CardContent className="p-4 text-black">
                    <div className="w-8 h-8 border-2 border-black flex items-center justify-center mb-8">
                      <span>F</span>
                    </div>
                    <h3 className="font-bold text-sm md:text-2xl">
                      FIGMA, PSDAI
                    </h3>
                    <p className="text-black/90 text-xs md:text-sm">
                      WORDPRESS, REACTJS
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* About and Tech Stack Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-8 col-span-3"
            >
              <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
                <CardHeader>
                  <CardTitle className="text-white">About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p className="text-gray-300">
                    I'm a Full-Stack Software Engineer with expertise in
                    TypeScript, Tailwind CSS, PostgreSQL, MySQL, Laravel,
                    WordPress, and Python. I build high-performance, scalable,
                    and user-friendly web and mobile applications, combining
                    technical precision with intuitive design. My experience
                    includes developing custom themes, business solutions, and
                    modern web applications that enhance usability and
                    efficiency.
                  </p>
                  <p className="text-gray-300">
                    I have worked on projects such as inventory and POS systems,
                    job portals, and productivity tools, helping businesses
                    streamline operations with well-structured and optimized
                    software. While I have experience with Ionic and React
                    Native for mobile development, my current focus is on web
                    applications and crafting seamless digital experiences.
                  </p>
                  <p className="text-gray-300">
                    Lately, I’ve been diving deeper into AI integration,
                    data-driven development, and UI/UX design, exploring how
                    emerging technologies can enhance modern applications.
                    Whether it’s optimizing workflows with AI-powered solutions
                    or refining user interactions, I’m always looking for new
                    ways to innovate and push boundaries in tech.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
                <CardHeader>
                  <CardTitle className="text-white">Beyond Coding</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p className="text-gray-300">
                    Beyond coding, I’ve been focused on self-improvement and
                    personal growth, reading books like Atomic Habits and The
                    Mountain Is You to build better habits and a stronger
                    mindset. I continuously explore UX/UI design, refining my
                    approach to creating intuitive and engaging digital
                    experiences. Attending seminars and meetups, like the
                    WordPress Meetup in Iligan, has helped me expand my network
                    and stay connected with the tech community. I’m also
                    exploring new tech stacks and AI while working on portfolio
                    projects that merge technical excellence with thoughtful
                    design.
                  </p>
                  <p className="text-gray-300">
                    I enjoy running and hiking, recently exploring Mindamora
                    Falls and Lampanag Ridge. Now, I’m aiming for bigger
                    challenges, including some of the top five highest mountains
                    in the Philippines. Hiking pushes my endurance and
                    discipline, reinforcing the mindset I bring to both my work
                    and personal life. It’s a way to disconnect, reset, and find
                    inspiration in nature while constantly pushing my limits.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* Tech Stack Section */}
            <div className="col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">TECH STACK</h2>
              <TechStack />
            </div>
          </motion.section>

          {/* Experience and Certifications Grid */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Experience Section */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Experience</h2>
              <div className="mt-12">
                <ExperienceTimeline experiences={experiences} />
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-white">
                  Certifications
                </h2>
                <Button
                  variant="ghost"
                  className="text-[#FF4D00] hover:text-[#FF4D00]/80"
                >
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-12 space-y-4">
                {certifications.slice(0, 3).map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CertificationCard certification={cert} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Recommendations and Blog Grid */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Recommendations Section */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Recommendations
              </h2>
              <h3 className="text-4xl font-bold text-[#4A4A4A] mb-8">
                What People Say
              </h3>
              <RecommendationSlider testimonials={testimonials} />
            </div>

            {/* Blog Section */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    Recent Blog Posts
                  </h2>
                  <h3 className="text-4xl font-bold text-[#4A4A4A]">
                    Latest Articles
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  className="text-[#FF4D00] hover:text-[#FF4D00]/80"
                >
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Recent Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">RECENT</h2>
                <h3 className="text-4xl font-bold text-[#4A4A4A]">PROJECTS</h3>
              </div>
              <Button
                variant="ghost"
                className="text-[#FF4D00] hover:text-[#FF4D00]/80"
              >
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#1A1A1A]/80 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg text-white">
                        {project.name}
                      </h3>
                      <p className="text-gray-300 mt-1 text-base">
                        {project.description}
                      </p>
                      <a
                        className="flex items-center text-[#FF4D00] mt-4 text-sm"
                        href={project.url}
                        target="_blank"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.url}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">LET'S WORK</h2>
              <h2 className="text-4xl font-bold text-[#4A4A4A] mb-8">
                TOGETHER
              </h2>
              <p className="text-gray-300">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out if you have a project in mind or just want to
                connect!
              </p>
            </div>
            <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
              <CardContent className="p-6">
                <form className="grid gap-4">
                  <Input
                    placeholder="Name"
                    className="bg-[#2A2A2A] border-0 text-white placeholder:text-gray-500"
                  />
                  <Input
                    placeholder="Email"
                    className="bg-[#2A2A2A] border-0 text-white placeholder:text-gray-500"
                  />
                  <Textarea
                    placeholder="Message"
                    className="bg-[#2A2A2A] border-0 min-h-[150px] text-white placeholder:text-gray-500"
                  />
                  <Button className="w-full bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.section>

          {/* Footer */}
          <footer className="text-center text-gray-400 text-sm pb-8">
            © {new Date().getFullYear()} J.M. Nicolas. All rights reserved.
          </footer>
        </div>
      </div>
    </RootLayout>
  );
}
