import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gamepad2, Zap, Target } from 'lucide-react'

const EasterEggs = ({ isOpen, onClose }) => {
  const [selectedGame, setSelectedGame] = useState(null)

  const games = [
    {
      id: 'snake',
      name: 'Circuit Snake',
      description: 'Guide the data packet through the circuit board',
      icon: Zap,
      component: SnakeGame
    },
    {
      id: 'breakout',
      name: 'Node Breaker',
      description: 'Break through the firewall nodes',
      icon: Target,
      component: BreakoutGame
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

// Simple Snake Game
const SnakeGame = () => {
  const [gameState, setGameState] = useState('ready') // 'ready', 'playing', 'gameOver'
  const [score, setScore] = useState(0)
  const [snake, setSnake] = useState([{ x: 10, y: 10 }])
  const [food, setFood] = useState({ x: 15, y: 15 })
  const [direction, setDirection] = useState({ x: 0, y: 0 })

  const gridSize = 20
  const canvasSize = 400

  const startGame = () => {
    setGameState('playing')
    setScore(0)
    setSnake([{ x: 10, y: 10 }])
    setFood({ x: 15, y: 15 })
    setDirection({ x: 1, y: 0 })
  }

  const resetGame = () => {
    setGameState('ready')
    setScore(0)
    setSnake([{ x: 10, y: 10 }])
    setFood({ x: 15, y: 15 })
    setDirection({ x: 0, y: 0 })
  }

  // Game controls
  const handleKeyPress = useCallback((e) => {
    if (gameState !== 'playing') return

    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 })
        break
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 })
        break
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 })
        break
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 })
        break
    }
  }, [direction, gameState])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return

    const gameLoop = setInterval(() => {
      setSnake(currentSnake => {
        const newSnake = [...currentSnake]
        const head = { ...newSnake[0] }
        
        head.x += direction.x
        head.y += direction.y

        // Check wall collision
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
          setGameState('gameOver')
          return currentSnake
        }

        // Check self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameState('gameOver')
          return currentSnake
        }

        newSnake.unshift(head)

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 10)
          setFood({
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
          })
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }, 150)

    return () => clearInterval(gameLoop)
  }, [direction, food, gameState])

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-between items-center font-mono text-sm">
        <span className="text-circuit-glow">Score: {score}</span>
        <span className="text-circuit-muted">Use arrow keys to move</span>
      </div>

      <div 
        className="relative mx-auto border-2 border-circuit-glow bg-circuit-bg"
        style={{ width: canvasSize, height: canvasSize }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className={`absolute ${index === 0 ? 'bg-circuit-glow' : 'bg-circuit-hover'}`}
            style={{
              left: segment.x * (canvasSize / gridSize),
              top: segment.y * (canvasSize / gridSize),
              width: canvasSize / gridSize - 1,
              height: canvasSize / gridSize - 1,
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute bg-red-500 rounded-full"
          style={{
            left: food.x * (canvasSize / gridSize),
            top: food.y * (canvasSize / gridSize),
            width: canvasSize / gridSize - 1,
            height: canvasSize / gridSize - 1,
          }}
        />

        {/* Game State Overlay */}
        {gameState === 'ready' && (
          <div className="absolute inset-0 bg-circuit-bg/90 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="font-mono text-circuit-glow text-xl">Circuit Snake</h3>
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

        {gameState === 'gameOver' && (
          <div className="absolute inset-0 bg-circuit-bg/90 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="font-mono text-red-500 text-xl">Game Over!</h3>
              <p className="font-mono text-circuit-glow">Final Score: {score}</p>
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
    </div>
  )
}

// Simple Breakout Game
const BreakoutGame = () => {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center items-center h-64 border-2 border-circuit-glow bg-circuit-bg rounded-lg">
        <div className="text-center space-y-4">
          <Target className="text-circuit-glow mx-auto" size={48} />
          <h3 className="font-mono text-circuit-glow text-xl">Node Breaker</h3>
          <p className="font-mono text-circuit-muted">Coming Soon...</p>
          <p className="font-mono text-xs text-circuit-muted">
            This game is still being compiled in the background!
          </p>
        </div>
      </div>
    </div>
  )
}

export default EasterEggs 