import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-circuit-muted font-mono text-sm"
            >
              // System.Initialize()
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Hi, I'm{' '}
              <span className="glow-text">Mirza Asdaf</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="text-xl md:text-2xl text-circuit-muted font-mono"
            >
              Aspiring Software Developer
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-circuit-text leading-relaxed">
              Computer Science student at Simon Fraser University, passionate about 
              building creative and impactful tools. Whether it's automating travel, 
              exploring AI, or working with embedded systems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-circuit-glow text-circuit-bg font-mono font-bold rounded-lg 
                         hover:bg-circuit-hover transition-colors duration-300"
              >
                View Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-circuit-glow text-circuit-glow font-mono font-bold 
                         rounded-lg hover:bg-circuit-glow hover:text-circuit-bg transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <div className="relative group max-w-sm mx-auto">
            {/* Circuit Frame */}
            <div className="absolute -inset-3 border-2 border-circuit-trace rounded-2xl 
                          group-hover:border-circuit-glow transition-all duration-500"></div>
            
            {/* Glowing Corners */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-l-2 border-t-2 border-circuit-glow rounded-tl-lg"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-r-2 border-t-2 border-circuit-glow rounded-tr-lg"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-l-2 border-b-2 border-circuit-glow rounded-bl-lg"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-r-2 border-b-2 border-circuit-glow rounded-br-lg"></div>
            
            {/* Photo */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/mirza-photo.jpg"
                alt="Mirza Asdaf"
                className="w-full max-w-sm mx-auto rounded-xl transition-transform duration-500 
                         group-hover:scale-105"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDBmZjg4IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjE2Ij5QaG90byBDb21pbmcgU29vbjwvdGV4dD4KPC9zdmc+'
                }}
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-circuit-bg/20 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Circuit Lines from Photo */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2, duration: 1.5 }}
              className="absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-circuit-glow to-transparent"
            ></motion.div>
            
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="absolute -bottom-6 left-1/2 w-0.5 h-12 bg-gradient-to-b from-circuit-glow to-transparent"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-circuit-muted"
        >
          <span className="font-mono text-sm">scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 