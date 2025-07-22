import { motion } from 'framer-motion'

const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1" fill="#333333" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0">
        {/* Horizontal Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-circuit-glow to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        ))}

        {/* Vertical Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-0.5 bg-gradient-to-b from-transparent via-circuit-glow to-transparent"
            style={{
              left: `${25 + i * 20}%`,
              top: 0,
              bottom: 0,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ 
              scaleY: [0, 1, 1, 0],
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.7 + 2,
              repeat: Infinity,
              repeatDelay: 4
            }}
          />
        ))}
      </div>

      {/* Floating Nodes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-circuit-glow rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Corner Circuits */}
      <div className="absolute top-4 left-4 opacity-30">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
            fill="none"
            stroke="#00ff88"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 opacity-30 transform rotate-180">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
            fill="none"
            stroke="#00ff88"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
    </div>
  )
}

export default CircuitBackground 