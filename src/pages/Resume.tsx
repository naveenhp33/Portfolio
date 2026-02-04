import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white p-8 print:p-0">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">NAVEEN KUMAR</h1>
          <p className="text-xl opacity-90 mb-4">Web Developer</p>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="mailto:naveenkumarsubramani2603@gmail.com" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="w-4 h-4" />
              naveenkumarsubramani2603@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Trichy, India
            </span>
            <a href="https://www.linkedin.com/in/naveen-kumar-s-909b3a364" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/naveenhp33" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Passionate and detail-oriented Web Developer with 2+ years of experience in creating beautiful, 
              functional, and user-friendly digital experiences. Specializing in frontend development with 
              expertise in React, TypeScript, and modern CSS frameworks. Committed to writing clean, 
              maintainable code and staying current with emerging web technologies.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"].map((skill) => (
                    <span key={skill} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS Code", "Figma", "npm", "Vite", "Vercel"].map((tool) => (
                    <span key={tool} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">B.Tech in Computer Science</h3>
                    <p className="text-muted-foreground">University Name</p>
                  </div>
                  <span className="text-muted-foreground text-sm">Expected 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Analytics Dashboard",
                  description: "Data visualization platform with real-time insights and interactive charts using React and Chart.js",
                  tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"]
                },
                {
                  title: "E-Commerce Store",
                  description: "Modern shopping experience with cart functionality, payment integration, and responsive design",
                  tech: ["React", "Redux", "Stripe", "Node.js"]
                },
                {
                  title: "Weather Application",
                  description: "Beautiful weather forecasting app with location-based predictions and animated weather icons",
                  tech: ["JavaScript", "OpenWeather API", "CSS3"]
                },
                {
                  title: "Task Manager",
                  description: "Productivity tool for organizing tasks with tags, priorities, and drag-and-drop functionality",
                  tech: ["React", "TypeScript", "DnD Kit"]
                }
              ].map((project, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coding Profiles */}
          <section>
            <h2 className="text-2xl font-bold text-foreground border-b-2 border-primary pb-2 mb-4">
              Coding Profiles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "LeetCode", stat: "150+ Problems" },
                { name: "HackerRank", stat: "5 Star Rating" },
                { name: "CodeChef", stat: "1800+ Rating" },
                { name: "GitHub", stat: "25+ Repositories" }
              ].map((profile) => (
                <div key={profile.name} className="text-center p-3 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground">{profile.name}</p>
                  <p className="text-sm text-muted-foreground">{profile.stat}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Print Button - Hidden when printing */}
        <div className="p-8 pt-0 print:hidden">
          <button 
            onClick={() => window.print()}
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Download as PDF (Print to PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
