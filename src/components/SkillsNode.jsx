import { motion } from 'framer-motion'
import { Code, Database, Globe, Cpu, Zap, Settings } from 'lucide-react'

const SkillsNode = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: Database,
      skills: ["Python", "Node.js", "SQL", "C++"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Systems",
      icon: Cpu,
      skills: ["C", "Assembly", "RISC-V", "Embedded"],
      color: "from-orange-500 to-red-500"
    }
  ]

  const allSkills = ["HTML", "CSS", "JavaScript", "Python", "C", "C++", "SQL", "React"]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="circuit-node"
    >
      {/* Node Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-circuit-glow rounded-full animate-pulse-glow"></div>
          <h3 className="text-xl font-bold font-mono">
            <span className="text-circuit-muted">//</span> Skills<span className="glow-text">.array</span>
          </h3>
        </div>
        <div className="font-mono text-xs text-circuit-muted">
          NODE_ID: 0x004
        </div>
      </div>

      {/* Skills Grid */}
      <div className="space-y-6">
        {/* Skill Categories */}
        <div className="space-y-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="p-4 bg-circuit-dark rounded-lg border border-circuit-trace hover:border-circuit-glow transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <category.icon className="text-circuit-glow" size={18} />
                <span className="font-mono font-bold text-circuit-glow text-sm">
                  {category.category}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * skillIndex }}
                    className="tech-badge text-xs text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circuit Pattern */}
        <div className="relative py-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-0.5 bg-gradient-to-r from-circuit-glow via-transparent to-circuit-glow"
          ></motion.div>
          
          {/* Skill Nodes */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
            {allSkills.slice(0, 4).map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="w-3 h-3 bg-circuit-glow rounded-full relative group"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-circuit-dark border border-circuit-glow rounded px-2 py-1 text-xs font-mono whitespace-nowrap">
                    {skill}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-circuit-dark rounded border border-circuit-trace">
            <div className="font-mono font-bold text-circuit-glow text-lg">8+</div>
            <div className="text-xs text-circuit-muted">Languages</div>
          </div>
          <div className="p-3 bg-circuit-dark rounded border border-circuit-trace">
            <div className="font-mono font-bold text-circuit-glow text-lg">5+</div>
            <div className="text-xs text-circuit-muted">Frameworks</div>
          </div>
        </div>
      </div>

      {/* Corner Indicators */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-circuit-glow rounded-full opacity-60"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-circuit-glow rounded-full opacity-60"></div>
    </motion.div>
  )
}

export default SkillsNode 