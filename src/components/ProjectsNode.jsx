import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Brain, Cpu, BarChart3 } from 'lucide-react'

const ProjectsNode = () => {
  const projects = [
    {
      title: "TripWise",
      description: "AI-powered travel planner with Gemini & Amadeus APIs.",
      technologies: ["React", "Node.js", "API Integration", "Gemini AI"],
      icon: Brain,
      github: "https://github.com/CMPT-276-SPRING-2025/final-project-09-pines",
      demo: "https://final-project-09-pines-eoxv.vercel.app",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "ScentMatch",
      description: "Fragrance recommendation and layering lab using AI.",
      technologies: ["Next.js", "Gemini API", "JavaScript", "AI/ML"],
      icon: Zap,
      github: "https://github.com/Mirza-7/scentmatch-app",
      demo: "#",
      color: "from-purple-500 to-violet-500",
      status: "Currently being worked on"
    },
    {
      title: "RISC-V Emulator",
      description: "Custom-built emulator for low-level RISC-V instructions.",
      technologies: ["C++", "Assembly", "Systems Programming", "RISC-V"],
      icon: Cpu,
      github: "#",
      demo: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "System Optimizer",
      description: "Tool to analyze system bottlenecks and suggest performance improvements.",
      technologies: ["Python", "Tkinter", "React", "Performance Analysis"],
      icon: BarChart3,
      github: "#",
      demo: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-mono mb-4">
            <span className="text-circuit-muted">//</span> Projects<span className="glow-text">.showcase</span>
          </h2>
          <p className="text-circuit-muted max-w-2xl mx-auto">
            A collection of projects that showcase my passion for building innovative solutions
          </p>
          <div className="w-24 h-1 bg-circuit-glow mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Microcontroller Card */}
              <div className="project-card relative overflow-hidden">
                {/* MCU Header */}
                <div className="flex items-center justify-between p-4 border-b border-circuit-trace">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-circuit-dark rounded border border-circuit-trace flex items-center justify-center">
                      <project.icon className="text-circuit-glow" size={16} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-mono font-bold text-lg text-circuit-glow">
                        {project.title}
                      </h3>
                      {project.status && (
                        <span className="text-xs font-mono text-yellow-400 italic">
                          ({project.status})
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-circuit-muted">
                    MODULE_{String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <p className="text-circuit-text leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * techIndex }}
                        className="tech-badge text-xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-3 py-2 bg-circuit-dark border border-circuit-trace 
                               rounded hover:border-circuit-glow hover:text-circuit-glow transition-all duration-300 text-sm"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-3 py-2 bg-circuit-glow text-circuit-bg 
                               rounded hover:bg-circuit-hover transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="absolute top-4 right-4 space-y-1">
                  <div className="w-2 h-2 bg-circuit-glow rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-circuit-trace rounded-full"></div>
                  <div className="w-2 h-2 bg-circuit-trace rounded-full"></div>
                </div>

                {/* Circuit Traces */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-circuit-glow to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Corner Pins */}
                <div className="absolute top-0 left-2 w-1 h-4 bg-circuit-trace"></div>
                <div className="absolute top-0 right-2 w-1 h-4 bg-circuit-trace"></div>
                <div className="absolute bottom-0 left-2 w-1 h-4 bg-circuit-trace"></div>
                <div className="absolute bottom-0 right-2 w-1 h-4 bg-circuit-trace"></div>
              </div>

              {/* Connection Lines */}
              {index % 2 === 0 && index < projects.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-circuit-glow to-transparent hidden md:block"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Circuit Board Traces */}
        <div className="mt-16 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-circuit-glow to-transparent"
          ></motion.div>
          
          {/* Nodes along the trace */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-circuit-glow rounded-full transform -translate-y-1/2"></div>
          <div className="absolute top-0 right-1/4 w-2 h-2 bg-circuit-glow rounded-full transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsNode 