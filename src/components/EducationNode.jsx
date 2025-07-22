import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const EducationNode = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="circuit-node"
    >
      {/* Node Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-circuit-glow rounded-full animate-pulse-glow"></div>
          <h3 className="text-xl font-bold font-mono">
            <span className="text-circuit-muted">//</span> Education<span className="glow-text">.sys</span>
          </h3>
        </div>
        <div className="font-mono text-xs text-circuit-muted">
          NODE_ID: 0x003
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-circuit-dark rounded-lg border border-circuit-trace flex items-center justify-center flex-shrink-0">
            <GraduationCap className="text-circuit-glow" size={20} />
          </div>
          
          <div className="flex-1">
            <h4 className="font-bold text-circuit-glow mb-2">
              Simon Fraser University
            </h4>
            <p className="text-circuit-text font-medium mb-2">
              Bachelor of Science in Computer Science
            </p>
            <div className="flex items-center space-x-2 text-sm text-circuit-muted">
              <Calendar size={14} />
              <span>Expected Graduation: 2027</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-circuit-muted font-mono">Progress</span>
            <span className="text-circuit-glow font-mono">60%</span>
          </div>
          <div className="w-full bg-circuit-dark rounded-full h-2 border border-circuit-trace">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="bg-gradient-to-r from-circuit-glow to-circuit-hover h-full rounded-full"
            ></motion.div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="p-3 bg-circuit-dark rounded border border-circuit-trace">
            <div className="font-mono font-bold text-circuit-glow">50+</div>
            <div className="text-xs text-circuit-muted">Credits</div>
          </div>
          <div className="p-3 bg-circuit-dark rounded border border-circuit-trace">
            <div className="font-mono font-bold text-circuit-glow">2027</div>
            <div className="text-xs text-circuit-muted">Grad Year</div>
          </div>
        </div>
      </div>

      {/* Corner Indicators */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-circuit-glow rounded-full opacity-60"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-circuit-glow rounded-full opacity-60"></div>
    </motion.div>
  )
}

export default EducationNode 