import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import Fireworks from '../components/Fireworks'
import './Finale.css'

function Finale() {
  const navigate = useNavigate()
  const [showConfetti, setShowConfetti] = useState(true)
  const [showFireworks, setShowFireworks] = useState(false)
  const [shakeScreen, setShakeScreen] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [celebrationLevel, setCelebrationLevel] = useState(1)
  const [showExtraButton, setShowExtraButton] = useState(false)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-start fireworks after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowFireworks(true)
      setShowExtraButton(true)
    }, 2000)

    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false)
    }, 5000)
  }, [])

  // Handle the big surprise button
  const handleBigSurprise = () => {
    setShakeScreen(true)
    setCelebrationLevel(prev => prev + 1)
    setShowConfetti(true)
    setShowFireworks(true)

    // Stop shaking after 2 seconds
    setTimeout(() => {
      setShakeScreen(false)
    }, 2000)

    // Stop confetti after 4 seconds
    setTimeout(() => {
      setShowConfetti(false)
    }, 4000)

    // Stop fireworks after 3 seconds
    setTimeout(() => {
      setShowFireworks(false)
    }, 3000)

    // If celebration level reaches 3, show extra confetti
    if (celebrationLevel >= 3) {
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
      }, 6000)
    }
  }

  return (
    <div className={`finale-page ${shakeScreen ? 'shake' : ''}`}>
      {/* Confetti Celebration */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={celebrationLevel > 2}
          numberOfPieces={celebrationLevel > 2 ? 800 : 500}
          gravity={0.2}
          colors={['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bff', '#ff9f43', '#ff4757', '#00d2d3', '#f368e0']}
        />
      )}

      {/* Fireworks */}
      {showFireworks && <Fireworks active={showFireworks} />}

      {/* Floating Decorations */}
      <div className="finale-decorations">
        <span className="float-emoji" style={{ top: '10%', left: '5%', fontSize: '40px', animationDelay: '0s' }}>🎆</span>
        <span className="float-emoji" style={{ top: '15%', right: '10%', fontSize: '35px', animationDelay: '1s' }}>🎇</span>
        <span className="float-emoji" style={{ bottom: '20%', left: '8%', fontSize: '45px', animationDelay: '0.5s' }}>🎉</span>
        <span className="float-emoji" style={{ bottom: '25%', right: '5%', fontSize: '38px', animationDelay: '1.5s' }}>🎊</span>
        <span className="float-emoji" style={{ top: '50%', left: '3%', fontSize: '30px', animationDelay: '2s' }}>✨</span>
        <span className="float-emoji" style={{ top: '45%', right: '3%', fontSize: '32px', animationDelay: '0.8s' }}>⭐</span>
        <span className="float-emoji" style={{ bottom: '10%', left: '50%', fontSize: '50px', animationDelay: '1.2s' }}>🎂</span>
      </div>

      {/* Main Content */}
      <div className="finale-content">
        {/* Giant Happy Birthday Text with Rainbow Animation */}
        <div className="birthday-title">
          <h1 className="rainbow-text">
            🎉 HAPPY BIRTHDAY! 🎉
          </h1>
          <div className="subtitle">
            <span>🎈</span>
            <span>You're Amazing!</span>
            <span>🎈</span>
          </div>
        </div>

        {/* Celebration Counter */}
        <div className="celebration-level">
          <span className="level-label">Celebration Level:</span>
          <span className="level-number">
            {'🎉'.repeat(Math.min(celebrationLevel, 5))}
            {celebrationLevel > 5 && '✨'}
          </span>
        </div>

        {/* Special Messages */}
        <div className="finale-messages">
          <div className="message-box">
            <p>🎂 Another year older, another year wiser!</p>
            <p>🌟 You deserve all the happiness in the world!</p>
            <p>💫 May your day be as special as you are!</p>
          </div>
        </div>

        {/* Interactive Buttons */}
        <div className="button-group">
          <button 
            className="surprise-btn"
            onClick={handleBigSurprise}
          >
            🎆 Hit Me With a Surprise!
          </button>

          {showExtraButton && (
            <button 
              className="extra-btn"
              onClick={() => {
                setShowConfetti(true)
                setTimeout(() => setShowConfetti(false), 3000)
              }}
            >
              🎊 More Confetti!
            </button>
          )}

          <button 
            className="restart-btn-finale"
            onClick={() => navigate('/')}
          >
            🔄 Start Over
          </button>
        </div>
      </div>

      {/* Birthday Person Tribute */}
     <div className="tribute-text">
  <p>Made with ❤️ for the most beautiful soul - Ashee Tomar</p>
  <p style={{ fontSize: '14px', marginTop: '8px', opacity: '0.8', fontWeight: 'bold' }}>
    🎈 Surprise by ANIVESH 🎈
  </p>
  <p style={{ fontSize: '12px', marginTop: '5px', opacity: '0.5' }}>
    आपकी दोस्ती मेरी सबसे बड़ी ताकत है 💫
  </p>
</div>
    </div>
  )
}

export default Finale