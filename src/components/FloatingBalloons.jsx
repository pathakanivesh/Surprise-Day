import { useEffect, useState } from 'react'
import './FloatingBalloons.css'

function FloatingBalloons() {
  const [balloons, setBalloons] = useState([])

  useEffect(() => {
    // Create balloons every 500ms
    const interval = setInterval(() => {
      const balloonColors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bff', '#ff9f43', '#00d2d3', '#f368e0', '#ff4757', '#2ed573']
      const newBalloon = {
        id: Date.now() + Math.random(),
        left: Math.random() * 90 + 5,
        size: Math.random() * 30 + 25,
        duration: Math.random() * 4 + 5,
        delay: Math.random() * 2,
        color: balloonColors[Math.floor(Math.random() * balloonColors.length)]
      }
      setBalloons(prev => [...prev, newBalloon])

      // Remove balloons after they finish animation
      setTimeout(() => {
        setBalloons(prev => prev.filter(b => b.id !== newBalloon.id))
      }, (newBalloon.duration + newBalloon.delay) * 1000)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="balloons-container">
      {balloons.map(balloon => (
        <div
          key={balloon.id}
          className="floating-balloon"
          style={{
            left: `${balloon.left}%`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
            backgroundColor: balloon.color,
            animationDuration: `${balloon.duration}s`,
            animationDelay: `${balloon.delay}s`,
            boxShadow: `inset -8px -8px 20px rgba(0,0,0,0.1), 
                       inset 8px 8px 20px rgba(255,255,255,0.3)`,
          }}
        >
          <div className="balloon-shine-small"></div>
          <div className="balloon-string-small"></div>
        </div>
      ))}
    </div>
  )
}

export default FloatingBalloons