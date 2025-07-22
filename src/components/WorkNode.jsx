import { motion } from 'framer-motion'
import { Building, Calendar, MapPin } from 'lucide-react'

const WorkNode = () => {
  const experiences = [
    {
      company: "CJSF",
      role: "Frontend Developer",
      period: "May 2025 – Present",
      location: "Vancouver, BC",
      description: "Developing responsive components and custom pages using PHP and Drupal's theming system. Enhanced accessibility and consistency of the UI, boosting user engagement by 30%. Refactored backend queries, leading to a 15% improvement in page load times and server response.",
      technologies: ["PHP", "Drupal", "Frontend Development", "Accessibility"],
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "OpenQQuantify",
      role: "Embedded Software Engineer",
      period: "July 2025 - Present",
      location: "Remote",
      description: "Working hands-on with low-level systems and embedded development.",
      technologies: ["C/C++", "Embedded Systems", "Hardware Integration", "Real-time Systems"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Horizon",
      role: "Backend Developer",
      period: "September 2024 - December 2024",
      location: "Vancouver, BC",
      description: "Worked on backend systems and contributed to scalable feature development in a collaborative team.",
      technologies: ["Node.js", "Python", "API Development", "Database Design"],
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-mono mb-4">
            <span className="text-circuit-muted">//</span> Work<span className="glow-text">.history</span>
          </h2>
          <div className="w-24 h-1 bg-circuit-glow mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* IC Chip Container */}
              <div className="circuit-node relative overflow-hidden">
                {/* Chip Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-circuit-dark rounded-b-full border-x border-b border-circuit-trace"></div>
                
                {/* Pin Indicators */}
                <div className="absolute left-0 top-4 bottom-4 w-1 space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={`left-${i}`} className="w-full h-2 bg-circuit-trace rounded-r"></div>
                  ))}
                </div>
                <div className="absolute right-0 top-4 bottom-4 w-1 space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={`right-${i}`} className="w-full h-2 bg-circuit-trace rounded-l"></div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6 pt-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-mono text-circuit-glow">
                        {exp.company}
                      </h3>
                      <p className="text-circuit-text font-medium">{exp.role}</p>
                    </div>
                    <div className="text-right text-sm text-circuit-muted">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-circuit-text mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * techIndex }}
                        className="tech-badge"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Pulse Animation on Hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-circuit-glow rounded-lg opacity-0 group-hover:opacity-30"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />

                {/* Status LED */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-circuit-glow rounded-full animate-pulse-glow"></div>
              </div>

              {/* Connection Traces */}
              {index === 0 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-circuit-glow to-transparent hidden md:block"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Circuit Trace */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-12 h-0.5 bg-gradient-to-r from-transparent via-circuit-glow to-transparent"
        ></motion.div>
      </div>
    </section>
  )
}

export default WorkNode 