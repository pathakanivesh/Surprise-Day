import { useState } from 'react'
import './FlippableCard.css'

function FlippableCard({ onOpen }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleOpen = () => {
    setIsFlipped(true)
    // Call the parent function to trigger confetti after flip
    setTimeout(() => {
      onOpen()
    }, 800) // Wait for flip animation to complete
  }

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        {/* FRONT OF CARD */}
        <div className="card-front">
          <div className="envelope-icon">💌</div>
          <h2>You've Got Mail!</h2>
          <p>A special birthday surprise awaits...</p>
          <button onClick={handleOpen} className="open-btn">
            Open Card ✨
          </button>
          <p className="hint">(Click to reveal)</p>
        </div>

        {/* BACK OF CARD (Inside) */}
        <div className="card-back">
          <h1>🎂 HAPPY BIRTHDAY! 🎂</h1>
          <p className="greeting-text">
            This card is just the beginning<br />
            of your special day!
          </p>
          <div className="emoji-rain">🎉 🎊 🎈 🎁 🎀</div>
          <button onClick={() => window.location.href = '/card'} className="continue-btn">
            Open the Surprise ➜
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlippableCard