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
import CertificationsDrawer from "./components/drawers/CertificationsDrawer";
import BlogsDrawer from "./components/drawers/BlogsDrawer";
import ProjectsDrawer from "./components/drawers/ProjectsDrawer";

export default function Portfolio() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Header Navigation */}
        <nav className="fixed top-0 right-4 z-50 flex gap-2 bg-[#1A1A1A]/90 backdrop-blur-sm p-2 rounded-full mt-4 !text-sm">
          <a
            href="https://drive.google.com/file/d/1Tl5C3CGmirK4Y9MnmSPdi_UKoGCU3xrV/view?usp=drive_link"
            target="_blank"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white hover:bg-white/10  rounded-tl-full rounded-bl-full rounded-tr-md rounded-br-md "
            >
              <Calendar className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </a>
          <a href="mailto:jaymarknicolas.dev@gmail.com">
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

        <div className="max-w-7xl mx-auto px-4 py-8 grid gap-12  relative z-10">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-16 flex gap-8 flex-col "
          >
            <Card className=" w-full bg-transparent border-none border-[#2A2A2A] overflow-hidden  flex justify-end h-full self-end flex-col  rounded-none sm:flex-row  ">
              <div
                style={{
                  background:
                    "linear-gradient(220.21deg, #691E02 3.31%, #C24617 63.27%)",
                }}
                className="!w-[150px] md:!w-[250px] rounded-2xl overflow-hidden mx-auto "
              >
                <img
                  src="./profile.png"
                  alt="Jay Mark Nicolas"
                  className=" object-cover  rounded-md md:rounded-none m-auto translate-y-10"
                />
              </div>
              <CardContent className="p-2 md:p-4 basis-[60%] flex-1 space-y-2 flex flex-col justify-center text-center sm:text-left">
                <h1 className="font-medium text-lg sm:text-4xl text-white">
                  Jay Mark Nicolas
                </h1>
                <div className="flex items-center text-gray-300 text-sm md:text-lg  mt-1 justify-center sm:justify-start">
                  <MapPin className="h-4 w-4 mr-1" />
                  Cagayan de Oro, Philippines
                </div>
                <div className="uppercase my-3 md:!my-5 ">
                  <h2 className="text-lg md:text-3xl text-white capitalize">
                    Software Engineer & Aspiring UX/UI Designer
                  </h2>
                </div>
                <div className="flex gap-2 mt-4 flex-wrap max-w-full md:max-w-[475px]">
                  <a
                    href="https://github.com/jaymarknicolas?tab=overview&from=2025-01-01&to=2025-01-16"
                    target="_blank"
                    className=" flex-1"
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
                    className=" flex-1"
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
          </motion.section>

          {/* About and Tech Stack Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-8 "
            >
              <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
                <CardHeader>
                  <CardTitle className="text-white">About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg">
                  <p className="text-gray-300 text-base">
                    I'm a Full-Stack Software Engineer with expertise in
                    Laravel, WordPress, NextJs, React Native, GraphQL and
                    Python. I build high-performance, scalable, and
                    user-friendly web and mobile applications, combining
                    technical precision with intuitive design. My experience
                    includes developing custom themes, business solutions, and
                    modern web applications that enhance usability and
                    efficiency.
                  </p>
                  <p className="text-gray-300 text-base">
                    I have worked on projects such as inventory and POS systems,
                    job portals, and productivity tools, helping businesses
                    streamline operations with well-structured and optimized
                    software. While I have experience with Ionic and React
                    Native for mobile development, my current focus is on web
                    applications and crafting seamless digital experiences.
                  </p>
                  <p className="text-gray-300 text-base">
                    As a Full-Stack Software Engineer specializing in Next.js, I
                    primarily focus on building modern, performant web
                    applications enhanced by AI integration, data-driven
                    features, and thoughtful UI/UX design. I’m passionate about
                    leveraging emerging technologies to optimize user
                    experiences, streamline workflows, and push the boundaries
                    of frontend development.
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* Tech Stack Section */}
            <div className="">
              <h2 className="text-3xl font-bold text-white mb-6">TECH STACK</h2>
              <TechStack />
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="gap-12"
          >
            <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
              <CardHeader>
                <CardTitle className="text-white">Beyond Coding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p className="text-gray-300 text-base">
                  Beyond coding, I’ve been focused on self-improvement and
                  personal growth, reading books like Atomic Habits and The
                  Mountain Is You to build better habits and a stronger mindset.
                  I continuously explore UX/UI design, refining my approach to
                  creating intuitive and engaging digital experiences. Attending
                  seminars and meetups, like the WordPress Meetup in Iligan, has
                  helped me expand my network and stay connected with the tech
                  community. I’m also exploring new tech stacks and AI while
                  working on portfolio projects that merge technical excellence
                  with thoughtful design.
                </p>
                <p className="text-gray-300 text-base">
                  I enjoy running and hiking, recently exploring Mindamora Falls
                  and Lampanag Ridge. Now, I’m aiming for bigger challenges,
                  including some of the top five highest mountains in the
                  Philippines. Hiking pushes my endurance and discipline,
                  reinforcing the mindset I bring to both my work and personal
                  life. It’s a way to disconnect, reset, and find inspiration in
                  nature while constantly pushing my limits.
                </p>
              </CardContent>
            </Card>
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
                {certifications && certifications.length > 3 && (
                  <CertificationsDrawer />
                )}
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
                {blogPosts && blogPosts.length > 3 && <BlogsDrawer />}
              </div>
              <div className="space-y-6">
                {blogPosts.slice(0, 3).map((post, index) => (
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
              {projects && projects.length > 4 && <ProjectsDrawer />}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((project, index) => (
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
          {/* <motion.section
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
              <p className="text-gray-300 text-base">
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
          </motion.section> */}

          {/* Footer */}
          <footer className="text-center text-gray-400 text-sm pb-8">
            © {new Date().getFullYear()} J.M. Nicolas. All rights reserved.
          </footer>
        </div>
      </div>
    </RootLayout>
  );
}
