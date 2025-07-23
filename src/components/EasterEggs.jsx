import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gamepad2, Zap, Keyboard } from 'lucide-react'

const EasterEggs = ({ isOpen, onClose }) => {
  const [selectedGame, setSelectedGame] = useState(null)

  const games = [
    {
      id: 'pong',
      name: 'Neural Pong',
      description: 'Classic ping pong with a cyberpunk twist',
      icon: Zap,
      component: PingPongGame
    },
    {
      id: 'typing',
      name: 'Neural Type',
      description: 'Test your typing speed in 30 seconds',
      icon: Keyboard,
      component: TypingTestGame
    }
  ]

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (selectedGame) {
          setSelectedGame(null)
        } else {
          onClose()
        }
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, selectedGame, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-circuit-bg/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-circuit-dark border-2 border-circuit-glow rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-circuit-dark border border-circuit-trace rounded-lg
                     hover:border-circuit-glow transition-colors duration-300 flex items-center justify-center"
          >
            <X size={16} className="text-circuit-glow" />
          </button>

          {/* Header */}
          <div className="border-b border-circuit-trace p-6 pb-4">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="text-circuit-glow" size={24} />
              <h2 className="text-2xl font-bold font-mono text-circuit-glow">
                Easter_Eggs.exe
              </h2>
            </div>
            <p className="text-circuit-muted font-mono text-sm mt-2">
              // Hidden arcade - Because every developer needs a break
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {!selectedGame ? (
              // Game Selection
              <div className="space-y-6">
                <div className="text-center">
                  <p className="font-mono text-circuit-text mb-6">
                    Select a game to play:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {games.map((game) => (
                    <motion.button
                      key={game.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedGame(game)}
                      className="p-6 bg-circuit-node border border-circuit-trace rounded-lg
                               hover:border-circuit-glow transition-all duration-300 text-left group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-circuit-dark rounded-lg border border-circuit-trace
                                      flex items-center justify-center group-hover:border-circuit-glow transition-colors">
                          <game.icon className="text-circuit-glow" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-mono font-bold text-circuit-glow text-lg mb-2">
                            {game.name}
                          </h3>
                          <p className="text-circuit-muted text-sm">
                            {game.description}
                          </p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <p className="font-mono text-xs text-circuit-muted">
                    Press <span className="text-circuit-glow">ESC</span> to close
                  </p>
                </div>
              </div>
            ) : (
              // Game Container
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono font-bold text-circuit-glow text-xl">
                    {selectedGame.name}
                  </h3>
                  <button
                    onClick={() => setSelectedGame(null)}
                    className="px-4 py-2 bg-circuit-dark border border-circuit-trace rounded-lg
                             hover:border-circuit-glow transition-colors font-mono text-sm"
                  >
                    ← Back to Games
                  </button>
                </div>
                
                <div className="bg-circuit-bg border border-circuit-trace rounded-lg p-4">
                  <selectedGame.component />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Neural Ping Pong Game
const PingPongGame = () => {
  const [gameState, setGameState] = useState('ready') // 'ready', 'playing', 'paused', 'gameOver'
  const [playerScore, setPlayerScore] = useState(0)
  const [aiScore, setAiScore] = useState(0)
  const [gameSpeed, setGameSpeed] = useState(1)
  
  // Game dimensions
  const gameWidth = 600
  const gameHeight = 400
  const paddleWidth = 8
  const paddleHeight = 80
  const ballSize = 8
  
  // Game objects
  const [playerPaddle, setPlayerPaddle] = useState({ y: gameHeight / 2 - paddleHeight / 2 })
  const [aiPaddle, setAiPaddle] = useState({ y: gameHeight / 2 - paddleHeight / 2 })
  const [ball, setBall] = useState({
    x: gameWidth / 2,
    y: gameHeight / 2,
    dx: 3,
    dy: 2
  })

  const [keys, setKeys] = useState({})

  const startGame = () => {
    setGameState('playing')
    setPlayerScore(0)
    setAiScore(0)
    setGameSpeed(1)
    setBall({
      x: gameWidth / 2,
      y: gameHeight / 2,
      dx: Math.random() > 0.5 ? 3 : -3,
      dy: (Math.random() - 0.5) * 4
    })
    setPlayerPaddle({ y: gameHeight / 2 - paddleHeight / 2 })
    setAiPaddle({ y: gameHeight / 2 - paddleHeight / 2 })
  }

  const resetGame = () => {
    setGameState('ready')
    setPlayerScore(0)
    setAiScore(0)
    setGameSpeed(1)
    setBall({
      x: gameWidth / 2,
      y: gameHeight / 2,
      dx: 3,
      dy: 2
    })
    setPlayerPaddle({ y: gameHeight / 2 - paddleHeight / 2 })
    setAiPaddle({ y: gameHeight / 2 - paddleHeight / 2 })
  }

  const pauseGame = () => {
    setGameState(gameState === 'playing' ? 'paused' : 'playing')
  }

  // Controls
  const handleKeyDown = useCallback((e) => {
    setKeys(prev => ({ ...prev, [e.key]: true }))
    if (e.key === ' ') {
      e.preventDefault()
      if (gameState === 'playing' || gameState === 'paused') {
        pauseGame()
      }
    }
  }, [gameState])

  const handleKeyUp = useCallback((e) => {
    setKeys(prev => ({ ...prev, [e.key]: false }))
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return

    const gameLoop = setInterval(() => {
      // Move player paddle
      setPlayerPaddle(prev => {
        let newY = prev.y
        if (keys['ArrowUp'] || keys['w'] || keys['W']) {
          newY = Math.max(0, prev.y - 5)
        }
        if (keys['ArrowDown'] || keys['s'] || keys['S']) {
          newY = Math.min(gameHeight - paddleHeight, prev.y + 5)
        }
        return { y: newY }
      })

      // Move AI paddle (with some intelligence and difficulty scaling)
      setAiPaddle(prev => {
        const ballCenter = ball.y + ballSize / 2
        const paddleCenter = prev.y + paddleHeight / 2
        const diff = ballCenter - paddleCenter
        const aiSpeed = 3 + gameSpeed * 0.5 // AI gets faster as game progresses
        
        let newY = prev.y
        if (Math.abs(diff) > 10) {
          if (diff > 0) {
            newY = Math.min(gameHeight - paddleHeight, prev.y + aiSpeed)
          } else {
            newY = Math.max(0, prev.y - aiSpeed)
          }
        }
        return { y: newY }
      })

      // Move ball
      setBall(prev => {
        let newBall = {
          x: prev.x + prev.dx * gameSpeed,
          y: prev.y + prev.dy * gameSpeed,
          dx: prev.dx,
          dy: prev.dy
        }

        // Ball collision with top/bottom walls
        if (newBall.y <= 0 || newBall.y >= gameHeight - ballSize) {
          newBall.dy = -newBall.dy
          newBall.y = newBall.y <= 0 ? 0 : gameHeight - ballSize
        }

        // Ball collision with player paddle
        if (newBall.x <= paddleWidth && 
            newBall.y + ballSize >= playerPaddle.y && 
            newBall.y <= playerPaddle.y + paddleHeight &&
            newBall.dx < 0) {
          const hitPos = (newBall.y + ballSize / 2 - playerPaddle.y) / paddleHeight
          newBall.dx = Math.abs(newBall.dx)
          newBall.dy = (hitPos - 0.5) * 8 // Add some angle based on where it hit
        }

        // Ball collision with AI paddle
        if (newBall.x + ballSize >= gameWidth - paddleWidth && 
            newBall.y + ballSize >= aiPaddle.y && 
            newBall.y <= aiPaddle.y + paddleHeight &&
            newBall.dx > 0) {
          const hitPos = (newBall.y + ballSize / 2 - aiPaddle.y) / paddleHeight
          newBall.dx = -Math.abs(newBall.dx)
          newBall.dy = (hitPos - 0.5) * 8
        }

        // Scoring
        if (newBall.x <= 0) {
          setAiScore(score => score + 1)
          setGameSpeed(speed => Math.min(speed + 0.1, 2))
          return {
            x: gameWidth / 2,
            y: gameHeight / 2,
            dx: 3,
            dy: (Math.random() - 0.5) * 4
          }
        }

        if (newBall.x >= gameWidth) {
          setPlayerScore(score => {
            const newScore = score + 1
            if (newScore >= 10) {
              setGameState('gameOver')
            }
            return newScore
          })
          setGameSpeed(speed => Math.min(speed + 0.1, 2))
          return {
            x: gameWidth / 2,
            y: gameHeight / 2,
            dx: -3,
            dy: (Math.random() - 0.5) * 4
          }
        }

        return newBall
      })

      // Check win condition
      if (aiScore >= 10) {
        setGameState('gameOver')
      }
    }, 16) // ~60 FPS

    return () => clearInterval(gameLoop)
  }, [gameState, keys, playerPaddle.y, aiPaddle.y, ball, gameSpeed, playerScore, aiScore])

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-between items-center font-mono text-sm">
        <span className="text-circuit-glow">You: {playerScore}</span>
        <span className="text-circuit-muted">Neural AI: {aiScore}</span>
        <span className="text-circuit-trace">Speed: {gameSpeed.toFixed(1)}x</span>
      </div>

      <div 
        className="relative mx-auto border-2 border-circuit-glow bg-circuit-bg"
        style={{ width: gameWidth, height: gameHeight }}
      >
        {/* Center line */}
        <div 
          className="absolute bg-circuit-trace opacity-30"
          style={{
            left: gameWidth / 2 - 1,
            top: 0,
            width: 2,
            height: gameHeight,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)'
          }}
        />

        {/* Player paddle */}
        <div
          className="absolute bg-circuit-glow shadow-glow rounded-sm"
          style={{
            left: 0,
            top: playerPaddle.y,
            width: paddleWidth,
            height: paddleHeight,
          }}
        />

        {/* AI paddle */}
        <div
          className="absolute bg-red-500 shadow-glow rounded-sm"
          style={{
            right: 0,
            top: aiPaddle.y,
            width: paddleWidth,
            height: paddleHeight,
          }}
        />

        {/* Ball */}
        <div
          className="absolute bg-circuit-glow rounded-full shadow-glow"
          style={{
            left: ball.x,
            top: ball.y,
            width: ballSize,
            height: ballSize,
          }}
        />

        {/* Game State Overlays */}
        {gameState === 'ready' && (
          <div className="absolute inset-0 bg-circuit-bg/90 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="font-mono text-circuit-glow text-xl">Neural Pong</h3>
              <p className="font-mono text-circuit-muted text-sm">
                Use ↑↓ or W/S keys to move your paddle
              </p>
              <p className="font-mono text-circuit-trace text-xs">
                First to 10 points wins • Press SPACE to pause
              </p>
              <button
                onClick={startGame}
                className="px-6 py-3 bg-circuit-glow text-circuit-bg font-mono font-bold rounded-lg
                         hover:bg-circuit-hover transition-colors"
              >
                Start Game
              </button>
            </div>
          </div>
        )}

        {gameState === 'paused' && (
          <div className="absolute inset-0 bg-circuit-bg/90 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="font-mono text-circuit-glow text-xl">PAUSED</h3>
              <p className="font-mono text-circuit-muted text-sm">
                Press SPACE to resume
              </p>
            </div>
          </div>
        )}

        {gameState === 'gameOver' && (
          <div className="absolute inset-0 bg-circuit-bg/90 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className={`font-mono text-xl ${playerScore >= 10 ? 'text-circuit-glow' : 'text-red-500'}`}>
                {playerScore >= 10 ? 'VICTORY!' : 'GAME OVER!'}
              </h3>
              <p className="font-mono text-circuit-glow">
                Final Score: {playerScore} - {aiScore}
              </p>
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-circuit-glow text-circuit-bg font-mono font-bold rounded-lg
                         hover:bg-circuit-hover transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="font-mono text-xs text-circuit-muted space-y-1">
        <p>↑↓ or W/S: Move paddle • SPACE: Pause/Resume</p>
        <p>AI gets smarter as the game progresses!</p>
      </div>
    </div>
  )
}

// Typing Test Game
const TypingTestGame = () => {
  const [gameState, setGameState] = useState('ready') // 'ready', 'playing', 'finished'
  const [timeLeft, setTimeLeft] = useState(30)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [correctChars, setCorrectChars] = useState(0)
  const [totalChars, setTotalChars] = useState(0)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [words, setWords] = useState([])

  // Word pool for generating random text
  const wordPool = [
    'system', 'circuit', 'neural', 'code', 'binary', 'data', 'function', 'array', 'object', 'variable',
    'algorithm', 'structure', 'memory', 'process', 'thread', 'stack', 'queue', 'hash', 'loop', 'condition',
    'network', 'protocol', 'server', 'client', 'database', 'query', 'index', 'table', 'field', 'record',
    'interface', 'module', 'component', 'library', 'framework', 'runtime', 'compile', 'debug', 'optimize',
    'encrypt', 'decode', 'parse', 'render', 'execute', 'initialize', 'configure', 'validate', 'authenticate'
  ]

  // Generate random text
  const generateText = () => {
    const shuffled = [...wordPool].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 50) // Get 50 random words
  }

  const startGame = () => {
    const newWords = generateText()
    setWords(newWords)
    setGameState('playing')
    setTimeLeft(30)
    setCurrentWordIndex(0)
    setCurrentCharIndex(0)
    setUserInput('')
    setCorrectChars(0)
    setTotalChars(0)
    setWpm(0)
    setAccuracy(100)
  }

  const resetGame = () => {
    setGameState('ready')
    setTimeLeft(30)
    setCurrentWordIndex(0)
    setCurrentCharIndex(0)
    setUserInput('')
    setCorrectChars(0)
    setTotalChars(0)
    setWpm(0)
    setAccuracy(100)
    setWords([])
  }

  // Timer effect
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('finished')
      // Calculate final WPM
      const wordsTyped = totalChars / 5 // Standard: 5 characters = 1 word
      const finalWpm = Math.round((wordsTyped / 30) * 60)
      setWpm(finalWpm)
    }
  }, [gameState, timeLeft]) // Removed totalChars dependency to prevent timer reset

  // Handle typing
  const handleKeyPress = useCallback((e) => {
    if (gameState !== 'playing') return

    const currentWord = words[currentWordIndex]
    const currentChar = currentWord?.[currentCharIndex]

    if (e.key === ' ') {
      e.preventDefault()
      // Move to next word if current word is complete
      if (currentCharIndex === currentWord.length) {
        setCurrentWordIndex(prev => prev + 1)
        setCurrentCharIndex(0)
        setUserInput('')
      }
      return
    }

    if (e.key === 'Backspace') {
      if (currentCharIndex > 0) {
        setCurrentCharIndex(prev => prev - 1)
        setUserInput(prev => prev.slice(0, -1))
      }
      return
    }

    // Only accept printable characters
    if (e.key.length === 1 && currentChar) {
      const newInput = userInput + e.key
      setUserInput(newInput)
      setTotalChars(prev => prev + 1)

      if (e.key === currentChar) {
        setCorrectChars(prev => prev + 1)
        setCurrentCharIndex(prev => prev + 1)
      } else {
        setCurrentCharIndex(prev => prev + 1)
      }

      // Calculate real-time accuracy
      const newAccuracy = Math.round(((correctChars + (e.key === currentChar ? 1 : 0)) / (totalChars + 1)) * 100)
      setAccuracy(newAccuracy)
    }
  }, [gameState, words, currentWordIndex, currentCharIndex, userInput, correctChars, totalChars, timeLeft])

  useEffect(() => {
    if (gameState === 'playing') {
      document.addEventListener('keydown', handleKeyPress)
      return () => document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress, gameState])

  // Calculate WPM every second
  useEffect(() => {
    if (gameState === 'playing') {
      const wpmTimer = setInterval(() => {
        const elapsed = 30 - timeLeft
        if (elapsed > 0) {
          const wordsTyped = totalChars / 5 // Standard: 5 characters = 1 word
          const currentWpm = Math.round((wordsTyped / elapsed) * 60)
          setWpm(currentWpm)
        }
      }, 1000)
      return () => clearInterval(wpmTimer)
    }
  }, [gameState, timeLeft, totalChars])

  // Render text with highlighting
  const renderText = () => {
    return words.slice(currentWordIndex, currentWordIndex + 10).map((word, wordIdx) => (
      <span key={wordIdx} className="inline-block mr-2">
        {word.split('').map((char, charIdx) => {
          const isCurrentWord = wordIdx === 0
          const isCurrentChar = isCurrentWord && charIdx === currentCharIndex
          const isTyped = isCurrentWord && charIdx < currentCharIndex
          const isCorrect = isTyped && userInput[charIdx] === char
          
          return (
            <span
              key={charIdx}
              className={`
                ${isCurrentChar ? 'bg-circuit-glow text-circuit-bg' : ''}
                ${isTyped ? (isCorrect ? 'text-circuit-glow' : 'text-red-500 bg-red-500/20') : 'text-circuit-muted'}
                ${!isTyped && !isCurrentChar ? 'text-circuit-text' : ''}
              `}
            >
              {char}
            </span>
          )
        })}
      </span>
    ))
  }

  return (
    <div className="space-y-6">
      {/* Stats Header */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-circuit-dark border border-circuit-trace rounded-lg p-3">
          <div className="text-2xl font-mono font-bold text-circuit-glow">{timeLeft}</div>
          <div className="text-xs text-circuit-muted">Time</div>
        </div>
        <div className="bg-circuit-dark border border-circuit-trace rounded-lg p-3">
          <div className="text-2xl font-mono font-bold text-circuit-glow">{wpm}</div>
          <div className="text-xs text-circuit-muted">WPM</div>
        </div>
        <div className="bg-circuit-dark border border-circuit-trace rounded-lg p-3">
          <div className="text-2xl font-mono font-bold text-circuit-glow">{accuracy}%</div>
          <div className="text-xs text-circuit-muted">Accuracy</div>
        </div>
      </div>

      {/* Game Area */}
      <div className="bg-circuit-bg border-2 border-circuit-glow rounded-lg p-6 min-h-[200px]">
        {gameState === 'ready' && (
          <div className="text-center space-y-4">
            <Keyboard className="text-circuit-glow mx-auto" size={48} />
            <h3 className="font-mono text-circuit-glow text-xl">Neural Type Test</h3>
            <p className="font-mono text-circuit-muted">
              Type the words as fast and accurately as you can!
            </p>
            <button
              onClick={startGame}
              className="px-6 py-3 bg-circuit-glow text-circuit-bg font-mono font-bold rounded-lg
                       hover:bg-circuit-hover transition-colors"
            >
              Start Test
            </button>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="space-y-4">
            <div className="font-mono text-lg leading-relaxed text-left">
              {renderText()}
            </div>
            <div className="text-center text-sm text-circuit-muted font-mono">
              Type the highlighted text • Press SPACE after each word
            </div>
          </div>
        )}

        {gameState === 'finished' && (
          <div className="text-center space-y-4">
            <h3 className="font-mono text-circuit-glow text-xl">Test Complete!</h3>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-circuit-dark border border-circuit-trace rounded-lg p-4">
                <div className="text-2xl font-mono font-bold text-circuit-glow">{wpm}</div>
                <div className="text-sm text-circuit-muted">Words per Minute</div>
              </div>
              <div className="bg-circuit-dark border border-circuit-trace rounded-lg p-4">
                <div className="text-2xl font-mono font-bold text-circuit-glow">{accuracy}%</div>
                <div className="text-sm text-circuit-muted">Accuracy</div>
              </div>
            </div>
            <div className="space-x-4">
              <button
                onClick={startGame}
                className="px-6 py-3 bg-circuit-glow text-circuit-bg font-mono font-bold rounded-lg
                         hover:bg-circuit-hover transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={resetGame}
                className="px-6 py-3 border border-circuit-trace text-circuit-glow font-mono font-bold rounded-lg
                         hover:border-circuit-glow transition-colors"
              >
                Back to Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EasterEggs 