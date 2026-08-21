import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import ReasonCard from '../components/ReasonCard'
import './Surprise.css'

function Surprise() {
  const navigate = useNavigate()
  const [revealedCount, setRevealedCount] = useState(0)
  const [totalReasons] = useState(12)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [allRevealed, setAllRevealed] = useState(false)

  const reasons = [
    { id: 0, emoji: '💖', color: '#ff6b6b', reason: 'तुम्हारा दिल बहुत बड़ा है - You have the biggest heart' },
    { id: 1, emoji: '🌟', color: '#ffd93d', reason: 'तुम मेरी प्रेरणा हो - You inspire me every day' },
    { id: 2, emoji: '💪', color: '#6bcb77', reason: 'तुम बहुत मजबूत हो - You are so strong' },
    { id: 3, emoji: '🌺', color: '#4d96ff', reason: 'तुम्हारी सुंदरता अंदर से है - Your beauty is from within' },
    { id: 4, emoji: '🌈', color: '#ff6bff', reason: 'तुम मेरी दुनिया को रंगीन बनाती हो - You color my world' },
    { id: 5, emoji: '🤗', color: '#ff9f43', reason: 'तुम हमेशा मेरा साथ देती हो - You always support me' },
    { id: 6, emoji: '✨', color: '#00d2d3', reason: 'तुम बहुत खास हो - You are truly special' },
    { id: 7, emoji: '🎯', color: '#f368e0', reason: 'तुम मुझे बेहतर इंसान बनाती हो - You make me a better person' },
    { id: 8, emoji: '🌻', color: '#ff9ff3', reason: 'तुम्हारी मुस्कान सब कुछ ठीक कर देती है - Your smile fixes everything' },
    { id: 9, emoji: '💎', color: '#54a0ff', reason: 'तुम अनमोल हो - You are priceless' },
    { id: 10, emoji: '🦋', color: '#5f27cd', reason: 'तुम हमेशा खूबसूरत रहती हो - You are always beautiful' },
    { id: 11, emoji: '👑', color: '#ff6348', reason: 'तुम मेरी क्वीन हो - You are my Queen' },
  ]

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

  useEffect(() => {
    if (revealedCount === totalReasons && totalReasons > 0 && !allRevealed) {
      setAllRevealed(true)
      setShowConfetti(true)
      setTimeout(() => {
        setShowMessage(true)
      }, 1500)
      setTimeout(() => {
        setShowConfetti(false)
      }, 4000)
    }
  }, [revealedCount, totalReasons, allRevealed])

  const handleReveal = () => {
    setRevealedCount(prev => prev + 1)
  }

  const getProgress = () => {
    return Math.round((revealedCount / totalReasons) * 100)
  }

  const resetGame = () => {
    window.location.reload()
  }

  return (
    <div className="surprise-page">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
          colors={['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bff', '#ff9f43', '#ff4757', '#f368e0']}
        />
      )}

      <div className="background-decorations">
        <span className="decoration" style={{ top: '5%', left: '3%', fontSize: '30px' }}>💫</span>
        <span className="decoration" style={{ top: '10%', right: '5%', fontSize: '25px', animationDelay: '1s' }}>✨</span>
        <span className="decoration" style={{ bottom: '15%', left: '5%', fontSize: '35px', animationDelay: '0.5s' }}>🌟</span>
        <span className="decoration" style={{ bottom: '20%', right: '3%', fontSize: '28px', animationDelay: '1.5s' }}>⭐</span>
        <span className="decoration" style={{ top: '50%', left: '2%', fontSize: '20px', animationDelay: '2s' }}>💖</span>
        <span className="decoration" style={{ top: '45%', right: '2%', fontSize: '22px', animationDelay: '0.8s' }}>🌺</span>
      </div>

      <div className="surprise-header">
        <h2>💖 Reasons Why You're Amazing, Ashee! 💖</h2>
        <p className="subtitle">Click each card to reveal what makes you so special ✨</p>
        {allRevealed && (
          <p className="all-revealed-text">🎉 You've revealed all 12 reasons! You're truly amazing! 🎉</p>
        )}
      </div>

      <div className="progress-container">
        <div className="progress-header">
          <span>🎯 Cards Revealed</span>
          <span>{revealedCount} / {totalReasons}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${getProgress()}%` }}></div>
        </div>
        <div className="progress-text">
          {getProgress() < 100 ? `Click the cards to reveal ${getProgress()}% complete 👆` : '🎉 All revealed! You\'re amazing!'}
        </div>
      </div>

      <div className={`cards-grid ${showMessage ? 'blurred' : ''}`}>
        {reasons.map((item) => (
          <ReasonCard
            key={item.id}
            reason={item.reason}
            emoji={item.emoji}
            color={item.color}
            onReveal={handleReveal}
            cardId={item.id}
          />
        ))}
      </div>

      {showMessage && (
        <div className="success-message">
          <div className="message-card">
            <h2>🎉 YOU'RE TRULY AMAZING, ASHEE! 🎉</h2>
            <div className="message-content">
              <p>You've revealed all the reasons why you're so special! 💖</p>
              <p className="special-text">तुम मेरी ज़िंदगी की सबसे खूबसूरत दोस्त हो ✨</p>
              <p className="birthday-wish">
                तुम हो तो मेरी दुनिया रोशन है 🌟<br />
                <span className="highlight">तुम</span> 
                <span className="highlight"> बहुत</span> 
                <span className="highlight"> ख़ास</span> 
                <span className="highlight"> हो</span> 
                <span className="highlight"> मेरे</span> 
                <span className="highlight"> लिए</span> 💖
              </p>
              <p className="special-text" style={{ marginTop: '15px' }}>Thank you for being YOU! 🌸</p>
              
              <div style={{ 
                marginTop: '20px', 
                padding: '12px', 
                background: 'linear-gradient(135deg, #ffd93d, #f9a825)',
                borderRadius: '15px',
                color: '#2d3436',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                💫 This Surprise is brought to you with love by - ANIVESH 💫
              </div>
            </div>
            <button className="finale-btn" onClick={() => navigate('/finale')}>
              The Grand Finale 🎆
            </button>
            <button className="reset-btn" onClick={resetGame}>
              Play Again 🔄
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Surprise