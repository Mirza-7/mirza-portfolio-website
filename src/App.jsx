import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutNode from './components/AboutNode'
import WorkNode from './components/WorkNode'
import ProjectsNode from './components/ProjectsNode'
import EducationNode from './components/EducationNode'
import SkillsNode from './components/SkillsNode'
import ContactNode from './components/ContactNode'
import CircuitBackground from './components/CircuitBackground'
import BootScreen from './components/BootScreen'
import EasterEggs from './components/EasterEggs'

function App() {
  const [isBooting, setIsBooting] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showEasterEggs, setShowEasterEggs] = useState(false)
  const [statusMessage, setStatusMessage] = useState('SYSTEM ONLINE')
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Cycling status messages with typewriter effect
  useEffect(() => {
         const messages = [
       'SYSTEM ONLINE',
       'ALL SYSTEMS NOMINAL',
       'RUNNING DIAGNOSTICS...',
       'NEURAL NETWORKS ACTIVE',
       'PROCESSING DATA...'
     ]
    
    let messageIndex = 0
    
    const cycleMessages = () => {
      setStatusMessage(messages[messageIndex])
      messageIndex = (messageIndex + 1) % messages.length
    }
    
    // Start cycling after initial boot
    if (!isBooting) {
      const interval = setInterval(cycleMessages, 3000)
      return () => clearInterval(interval)
    }
  }, [isBooting])

  // Easter egg trigger - click the bars once
  const handleBarsClick = () => {
    setShowEasterEggs(true)
    setStatusMessage('GAMES ACTIVATED!')
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit'
    })
  }

  if (isBooting) {
    return <BootScreen />
  }

  return (
    <div className="relative min-h-screen bg-circuit-bg">
      <CircuitBackground />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-circuit-bg/80 backdrop-blur-sm border-b border-circuit-trace">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              {/* Left Group - Branding & Status */}
              <div className="flex items-center space-x-4">
                <div className="font-mono text-circuit-glow font-bold">
                  &lt;/MIRZA&gt;
                </div>
                <div className="hidden md:flex items-center space-x-2 font-mono text-xs text-circuit-muted">
                  <TypewriterText text={statusMessage} />
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleBarsClick}
                      className="flex space-x-1 cursor-pointer hover:opacity-80 transition-opacity"
                      title="Click me!"
                    >
                      {[0, 1, 2, 3].map((index) => (
                        <motion.div
                          key={index}
                          className="w-1 h-3 bg-circuit-glow"
                          animate={{
                            opacity: [0.2, 1, 0.2],
                            boxShadow: [
                              '0 0 0px rgba(0, 255, 136, 0.2)',
                              '0 0 8px rgba(0, 255, 136, 0.8)',
                              '0 0 0px rgba(0, 255, 136, 0.2)'
                            ]
                          }}
                          transition={{
                            duration: 2,
                            delay: index * 0.2,
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                        />
                      ))}
                    </button>
                    
                    {/* Animated Arrow and Text */}
                    <div className="flex items-center space-x-1 text-circuit-glow">
                      <motion.span
                        animate={{ x: [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-xs"
                      >
                        ←
                      </motion.span>
                      <span className="text-xs">click here</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Group - Navigation & Time */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Navigation */}
                <div className="flex space-x-6 font-mono text-sm">
                  <a href="#hero" className="hover:text-circuit-glow transition-colors">INIT</a>
                  <a href="#about" className="hover:text-circuit-glow transition-colors">ABOUT</a>
                  <a href="#work" className="hover:text-circuit-glow transition-colors">WORK</a>
                  <a href="#projects" className="hover:text-circuit-glow transition-colors">PROJECTS</a>
                  <a href="#contact" className="hover:text-circuit-glow transition-colors">CONTACT</a>
                </div>
                
                {/* Time/Date Display */}
                <div className="flex items-center space-x-1 font-mono text-xs text-circuit-glow border-l border-circuit-trace pl-6">
                  <div className="w-1.5 h-1.5 bg-circuit-glow rounded-full animate-pulse"></div>
                  <span>{formatDate(currentTime)}</span>
                  <span>•</span>
                  <span>{formatTime(currentTime)}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          <HeroSection />
          <AboutNode />
          <WorkNode />
          <ProjectsNode />
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-12">
            <EducationNode />
            <SkillsNode />
          </div>
          <ContactNode />
        </main>
      </motion.div>

      {/* Easter Eggs */}
      <EasterEggs 
        isOpen={showEasterEggs} 
        onClose={() => setShowEasterEggs(false)} 
      />
    </div>
    )
}

// Typewriter effect component
const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setDisplayText('')
    setCurrentIndex(0)
  }, [text])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  return (
    <span className="min-w-[200px]">
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-circuit-glow"
        >
          _
        </motion.span>
      )}
    </span>
  )
}

export default App
