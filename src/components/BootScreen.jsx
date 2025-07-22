import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const BootScreen = () => {
  const [currentLine, setCurrentLine] = useState(0)
  
  const bootSequence = [
    "Initializing neural pathways...",
    "Loading portfolio modules...",
    "Establishing connection to creativity core...",
    "Calibrating embedded systems...",
    "Loading project database...",
    "Activating interactive protocols...",
    "System ready. Welcome to the circuit."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < bootSequence.length - 1) {
          return prev + 1
        }
        clearInterval(interval)
        return prev
      })
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-circuit-bg flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="text-4xl font-mono text-circuit-glow mb-4">
            &lt;/MIRZA&gt;
          </div>
          <div className="text-circuit-muted font-mono text-sm">
            Portfolio System v2.0.1
          </div>
        </motion.div>

        <div className="space-y-2 font-mono text-sm">
          {bootSequence.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: index <= currentLine ? 1 : 0.3,
                x: 0 
              }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center ${
                index <= currentLine ? 'text-circuit-glow' : 'text-circuit-muted'
              }`}
            >
              <span className="mr-3">
                {index < currentLine ? '✓' : index === currentLine ? '▶' : '○'}
              </span>
              {line}
              {index === currentLine && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  _
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentLine + 1) / bootSequence.length) * 100}%` }}
          className="mt-8 h-1 bg-circuit-glow rounded-full"
          transition={{ duration: 0.3 }}
        />

        <div className="mt-4 text-center text-circuit-muted font-mono text-xs">
          {Math.round(((currentLine + 1) / bootSequence.length) * 100)}% Complete
        </div>
      </div>
    </div>
  )
}

export default BootScreen 