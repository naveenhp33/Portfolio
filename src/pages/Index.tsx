import { Mail, Linkedin, Github, Instagram, Code2, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile.png";
import aboutIllustration from "@/assets/about-illustration.png";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";
import project5 from "@/assets/project5.png";
import project6 from "@/assets/project6.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-['Inter',sans-serif]">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">About</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors duration-300">Projects</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors duration-300">Skills</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen gradient-hero flex items-center justify-center pt-20 section-padding">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium">Hello, I'm</p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                  Your Name
                </h1>
                <p className="text-2xl md:text-3xl text-primary font-medium">
                  I build modern web experiences
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A passionate web developer specializing in creating beautiful, functional, and user-friendly digital experiences.
              </p>

              <div className="flex gap-4">
                <a href="#contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-105">
                    Hire Me
                  </Button>
                </a>
                <a href="#projects">
                  <Button size="lg" variant="outline" className="border-2 hover:bg-secondary transition-all duration-300 hover:scale-105">
                    View Work
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover glass-card shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Hi, I'm a Web Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science student with a passion for creating elegant solutions to complex problems. 
                With a focus on frontend development, I specialize in building responsive and interactive web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in web development started with HTML and CSS, and has since expanded to modern frameworks 
                and libraries. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Education</h4>
                  <p className="text-muted-foreground">B.Tech in Computer Science</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                  <p className="text-muted-foreground">2+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Projects</h4>
                  <p className="text-muted-foreground">15+ Completed</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={aboutIllustration} 
                alt="About illustration" 
                className="w-full max-w-md rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: project1, title: "Analytics Dashboard", desc: "Data visualization platform with real-time insights and interactive charts", link: "#" },
              { img: project2, title: "E-Commerce Store", desc: "Modern shopping experience with cart functionality and payment integration", link: "#" },
              { img: project3, title: "Weather App", desc: "Beautiful weather forecasting application with location-based predictions", link: "#" },
              { img: project4, title: "Task Manager", desc: "Productivity tool for organizing tasks with tags and priorities", link: "#" },
              { img: project5, title: "Social Platform", desc: "Community-driven social media application with real-time interactions", link: "#" },
              { img: project6, title: "Portfolio CMS", desc: "Content management system for creative professionals and agencies", link: "#" },
            ].map((project, index) => (
              <Card key={index} className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                  <a href={project.link} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Frontend Development</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "HTML5", level: 95, color: "skill-html" },
                  { name: "CSS3", level: 90, color: "skill-css" },
                  { name: "JavaScript", level: 85, color: "skill-js" },
                  { name: "React", level: 80, color: "skill-react" },
                  { name: "Tailwind CSS", level: 90, color: "skill-css" },
                  { name: "TypeScript", level: 75, color: "skill-js" },
                ].map((skill, index) => (
                  <div key={index} className="glass-card p-6 space-y-3 hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-${skill.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Git", "GitHub", "VS Code", "Figma", "npm", "Vite", "Vercel", "Responsive Design"].map((tool, index) => (
                  <div key={index} className="glass-card px-6 py-3 text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Coding Profiles</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "LeetCode", problems: "150+", link: "https://leetcode.com" },
              { name: "HackerRank", stars: "5 ⭐", link: "https://hackerrank.com" },
              { name: "CodeChef", rating: "1800+", link: "https://codechef.com" },
              { name: "GitHub", repos: "25+", link: "https://github.com" },
            ].map((profile, index) => (
              <a 
                key={index} 
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 text-center space-y-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <Code2 className="w-12 h-12 mx-auto text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-foreground">{profile.name}</h3>
                <p className="text-muted-foreground">{profile.problems || profile.stars || profile.rating || profile.repos}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <Card className="glass-card p-8 md:p-12 shadow-xl">
            <form action="mailto:your.email@example.com" method="post" encType="text/plain" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border space-y-4 text-center">
              <p className="text-muted-foreground">Or reach me directly at:</p>
              <p className="text-foreground font-medium">your.email@example.com</p>
              <p className="text-muted-foreground">📍 India</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-hero border-t py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 Your Name. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://naukri.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Calendar className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
