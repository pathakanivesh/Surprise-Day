import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import FlippableCard from '../components/FlippableCard'

function Home() {
  const navigate = useNavigate()
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  // Trigger confetti when card is opened
  const handleCardOpen = () => {
    setShowConfetti(true)
    
    // Auto-navigate to card page after confetti celebration
    setTimeout(() => {
      setShowConfetti(false)
      navigate('/card')
    }, 4000) // 4 seconds of confetti celebration
  }

  return (
    <div style={{ 
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Confetti Explosion */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
          colors={['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bff', '#ff9f43']}
        />
      )}

      {/* Floating Background Decorations */}
      <div className="floating-emojis">
        <span style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '40px', animation: 'float 4s ease-in-out infinite' }}>🎈</span>
        <span style={{ position: 'absolute', top: '20%', right: '8%', fontSize: '50px', animation: 'float 5s ease-in-out infinite 1s' }}>🎁</span>
        <span style={{ position: 'absolute', bottom: '25%', left: '10%', fontSize: '45px', animation: 'float 4.5s ease-in-out infinite 0.5s' }}>🎊</span>
        <span style={{ position: 'absolute', bottom: '30%', right: '5%', fontSize: '35px', animation: 'float 5.5s ease-in-out infinite 1.5s' }}>🎀</span>
        <span style={{ position: 'absolute', top: '50%', left: '3%', fontSize: '30px', animation: 'float 6s ease-in-out infinite 2s' }}>⭐</span>
        <span style={{ position: 'absolute', top: '60%', right: '3%', fontSize: '40px', animation: 'float 4.2s ease-in-out infinite 0.8s' }}>✨</span>
      </div>

      {/* The Flippable Card */}
      <FlippableCard onOpen={handleCardOpen} />

      {/* Add CSS for floating animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  )
}

export default Home