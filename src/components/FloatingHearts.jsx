import { useEffect, useState } from 'react'
import './FloatingHearts.css'

function FloatingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    // Create hearts every 300ms
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 90 + 5, // Random horizontal position
        size: Math.random() * 30 + 20, // Random size between 20-50px
        duration: Math.random() * 3 + 4, // Random duration 4-7s
        delay: Math.random() * 2,
        emoji: ['❤️', '💖', '💕', '💗', '💛', '🧡', '💜', '🩷'][Math.floor(Math.random() * 8)]
      }
      setHearts(prev => [...prev, newHeart])

      // Remove hearts after they finish animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, (newHeart.duration + newHeart.delay) * 1000)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hearts-container">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts