import {
  MapPin,
  Calendar,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import RootLayout from "./components/RootLayout";

function App() {
  return (
    <RootLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Header Navigation */}
        <nav className="fixed top-0 right-4 z-50 flex gap-2 bg-[#1A1A1A]/90 backdrop-blur-sm p-2 rounded-full mt-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white hover:bg-white/10"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule a Call
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white hover:bg-white/10"
          >
            <Mail className="h-4 w-4 mr-2" />
            Send Email
          </Button>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8 grid gap-24  relative z-10">
          {/* Hero Section */}
          <section className="pt-16 flex gap-32">
            <Card className="bg-[#1A1A1A] border-[#2A2A2A] overflow-hidden basis-1/3 flex flex-col justify-end h-[85%] self-end">
              <img
                src="http://nick-portfolio.local/wp-content/uploads/2025/01/Profile.png"
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-[#2A2A2A] hover:bg-white/5 hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Github
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-[#2A2A2A] hover:bg-white/5 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
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
                    <h3 className="font-bold text-white">DYNAMIC ANIMATION</h3>
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
          </section>

          {/* About and Tech Stack Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1A1A1A] border-[#2A2A2A]">
              <CardHeader>
                <CardTitle className="text-white">About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">TECH STACK</h2>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "PHP",
                  "Laravel",
                  "AWS",
                  "Docker",
                  "Tailwind",
                  "Azure",
                  "MySQL",
                  "MongoDB",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-2 py-1 text-sm border-[#2A2A2A] bg-[#1A1A1A] hover:bg-[#2A2A2A] text-gray-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-2">3 YEARS OF</h2>
            <h2 className="text-4xl font-bold text-[#4A4A4A] mb-8">
              EXPERIENCE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  role: "Senior Full-Stack Developer",
                  company: "Cambridge",
                  year: "2024",
                  current: true,
                },
                {
                  role: "Founder",
                  company: "BASE404",
                  year: "2023",
                },
                {
                  role: "Chief Technology Officer",
                  company: "PocketDevs",
                  year: "2022",
                },
                {
                  role: "Associate Manager",
                  company: "Bluewind Asia",
                  year: "2021",
                },
                {
                  role: "Software Engineer",
                  company: "GCM",
                  year: "2020",
                },
              ].map((experience, index) => (
                <Card
                  key={index}
                  className="bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#1A1A1A]/80 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-white">
                          {experience.role}
                        </h3>
                        <p className="text-gray-300">{experience.company}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-[#2A2A2A] bg-[#2A2A2A] text-gray-300"
                      >
                        {experience.year}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Recent Projects Section */}
          <section>
            <h2 className="text-4xl font-bold text-white mb-2">RECENT</h2>
            <h2 className="text-4xl font-bold text-[#4A4A4A] mb-8">PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "CodeCred",
                  description: "Online certifications for programmers",
                  url: "codecred.dev",
                },
                {
                  name: "BASE404",
                  description: "Online coding bootcamp",
                  url: "base404.com",
                },
                {
                  name: "Resume Builder",
                  description: "Harvard style and ATS-friendly resume builder",
                  url: "resume-builder.bryllim.com",
                },
                {
                  name: "Capstone Generator",
                  description: "Online capstone generator for IT/CS students",
                  url: "capstone-generator.bryllim.com",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#1A1A1A]/80 transition-colors"
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-white">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mt-1">{project.description}</p>
                    <div className="flex items-center text-[#FF4D00] mt-4 text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {project.url}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
          </section>

          {/* Footer */}
          <footer className="text-center text-gray-400 text-sm pb-8">
            © 2024 Jay Mark Nicolas. All rights reserved.
          </footer>
        </div>
      </div>
    </RootLayout>
  );
}

export default App;
