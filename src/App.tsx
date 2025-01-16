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
            className="text-white hover:text-white hover:bg-white/10  rounded-tl-full rounded-bl-full rounded-tr-md rounded-br-md"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule a Call
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white hover:bg-white/10 rounded-tr-full rounded-br-full"
          >
            <Mail className="h-4 w-4 mr-2" />
            Send Email
          </Button>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8 grid gap-24  relative z-10">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-16 flex gap-32"
          >
            <Card className="bg-[#1A1A1A] border-[#2A2A2A] overflow-hidden basis-1/3 flex flex-col justify-end h-[85%] self-end">
              <img
                src="./profile.png"
                alt="Jay Mark Nicolas"
                className="w-full object-cover flex-1"
              />
              <CardContent className="p-4">
                <h1 className="font-bold text-xl text-white">
                  Jay Mark Nicolas
                </h1>
                <div className="flex items-center text-gray-300 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  Cagayan de Oro, Philippines
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <a
                    href="https://github.com/jaymarknicolas?tab=overview&from=2025-01-01&to=2025-01-16"
                    target="_blank"
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

            <div className=" basis-1/3 flex flex-col gap-8 flex-1 space-y-8">
              <div className="uppercase space-y-5">
                <h1 className="text-8xl font-bold text-white">
                  SOFTWARE
                  <br />
                  <span className="text-8xl font-bold text-[#4A4A4A]">
                    ENGINEER
                  </span>
                </h1>

                <p className="text-gray-300 mt-4 text2xl font-bold tracking-wider">
                  <span className="text-[#4A4A4A]"> & </span>
                  ASPIRING
                  <span className="text-[#4A4A4A]"> UX/UI DESIGNER</span>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-6xl font-bold text-white">+3</div>
                  <div className="text-sm text-gray-300">
                    Years of Experience
                  </div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-white">+50</div>
                  <div className="text-sm text-gray-300">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-6xl font-bold text-white">+10</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#FF4D00] border-0 hover:bg-[#FF4D00]/90 transition-colors h-[200px]">
                  <CardContent className="p-4">
                    <div className="w-8 h-8 border-2 border-white/90 flex items-center justify-center mb-8">
                      <span className="text-white">D</span>
                    </div>
                    <h3 className="font-bold text-white">LOREM IPSUM</h3>
                    <p className="text-white/90 text-sm">MOTION DESIGN</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#9EFF00] border-0 hover:bg-[#9EFF00]/90 transition-colors h-[200px]">
                  <CardContent className="p-4 text-black">
                    <div className="w-8 h-8 border-2 border-black flex items-center justify-center mb-8">
                      <span>F</span>
                    </div>
                    <h3 className="font-bold">FIGMA, PSDAI</h3>
                    <p className="text-black/90 text-sm">WORDPRESS, REACTJS</p>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
              <CardHeader>
                <CardTitle className="text-white">About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <p className="text-gray-300">
                  Passionate about creating intuitive and engaging user
                  experiences. Specialize in transforming ideas into beautifully
                  crafted products.
                </p>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia quis, nisi quibusdam quidem impedit iste quisquam
                  excepturi? Excepturi exercitationem quae mollitia, voluptatem
                  asperiores quos itaque sunt molestiae placeat consequuntur
                  aliquam!
                </p>
              </CardContent>
            </Card>

            {/* Tech Stack Section */}
            <div>
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
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
                  <CardHeader>
                    <CardTitle className="text-white">Beyond Coding</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-lg">
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia quis, nisi quibusdam quidem impedit iste quisquam
                      excepturi? Excepturi exercitationem quae mollitia,
                      voluptatem asperiores quos itaque sunt molestiae placeat
                      consequuntur aliquam!
                    </p>
                  </CardContent>
                </Card>
              </motion.section>
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
                      <p className="text-gray-300 mt-1">
                        {project.description}
                      </p>
                      <div className="flex items-center text-[#FF4D00] mt-4 text-sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.url}
                      </div>
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
            © {new Date().getFullYear()} Jay Mark Nicolas. All rights reserved.
          </footer>
        </div>
      </div>
    </RootLayout>
  );
}
