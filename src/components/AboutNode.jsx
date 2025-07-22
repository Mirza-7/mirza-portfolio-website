import { motion } from 'framer-motion'
import { Code, Zap, Heart } from 'lucide-react'

const AboutNode = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="circuit-node"
        >
          {/* Node Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-circuit-glow rounded-full animate-pulse-glow"></div>
              <h2 className="text-3xl font-bold font-mono">
                <span className="text-circuit-muted">//</span> About.exe
              </h2>
            </div>
            <div className="font-mono text-sm text-circuit-muted">
              NODE_ID: 0x001
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-circuit-text"
            >
              I'm a Computer Science student at Simon Fraser University, passionate about 
              building creative and impactful tools. Whether it's automating tasks, 
              exploring AI, or working with embedded systems, I love building things that 
              work smart and look clean.
            </motion.p>

            {/* Interests Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-3 p-4 bg-circuit-dark rounded-lg border border-circuit-trace
                         hover:border-circuit-glow transition-all duration-300"
              >
                <Code className="text-circuit-glow" size={24} />
                <div>
                  <h3 className="font-mono font-bold text-circuit-glow">Development</h3>
                  <p className="text-sm text-circuit-muted">Full-stack & embedded</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-3 p-4 bg-circuit-dark rounded-lg border border-circuit-trace
                         hover:border-circuit-glow transition-all duration-300"
              >
                <Zap className="text-circuit-glow" size={24} />
                <div>
                  <h3 className="font-mono font-bold text-circuit-glow">Innovation</h3>
                  <p className="text-sm text-circuit-muted">AI & automation</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-3 p-4 bg-circuit-dark rounded-lg border border-circuit-trace
                         hover:border-circuit-glow transition-all duration-300"
              >
                <Heart className="text-circuit-glow" size={24} />
                <div>
                  <h3 className="font-mono font-bold text-circuit-glow">Impact</h3>
                  <p className="text-sm text-circuit-muted">Making a difference</p>
                </div>
              </motion.div>
            </div>

            {/* Circuit Traces */}
            <div className="relative">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-circuit-glow via-transparent to-circuit-glow"
              ></motion.div>
            </div>
          </div>

          {/* Corner Indicators */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-circuit-glow rounded-full opacity-60"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-circuit-glow rounded-full opacity-60"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutNode 