import { useState } from 'react'
import './Balloon.css'

function Balloon({ color, onPop, index }) {
  const [isPopped, setIsPopped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = (e) => {
    e.stopPropagation()
    if (isPopped || isAnimating) return
    
    setIsAnimating(true)
    
    // Play pop animation then notify parent
    setTimeout(() => {
      setIsPopped(true)
      setIsAnimating(false)
      onPop(index)
    }, 300)
  }

  // Random float position and delay for each balloon
  const randomX = Math.random() * 70 + 15 // 15% to 85%
  const randomDelay = Math.random() * 3
  const randomDuration = Math.random() * 4 + 6 // 6-10 seconds
  const randomSize = Math.random() * 20 + 70 // 70-90px

  if (isPopped) {
    return (
      <div 
        className="balloon-popped"
        style={{
          left: `${randomX}%`,
          bottom: '50%',
        }}
      >
        <span className="pop-effect">💥</span>
      </div>
    )
  }

  return (
    <div 
      className={`balloon-container ${isAnimating ? 'popping' : ''}`}
      style={{
        left: `${randomX}%`,
        animationDuration: `${randomDuration}s`,
        animationDelay: `${randomDelay}s`,
        cursor: 'pointer',
        zIndex: 2,
      }}
      onClick={handleClick}
    >
      <div 
        className="balloon"
        style={{
          backgroundColor: color,
          width: `${randomSize}px`,
          height: `${randomSize * 1.2}px`,
          boxShadow: `inset -10px -10px 30px rgba(0,0,0,0.1), 
                      inset 10px 10px 30px rgba(255,255,255,0.3)`,
        }}
      >
        <div className="balloon-shine"></div>
        <div className="balloon-string"></div>
        {/* Hover effect text */}
        <div className="balloon-hint">Click me!</div>
      </div>
    </div>
  )
}

export default Balloon