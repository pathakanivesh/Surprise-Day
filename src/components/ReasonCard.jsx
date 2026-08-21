import { useState } from 'react'

function ReasonCard({ reason, emoji, color, onReveal, cardId }) {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleClick = () => {
    if (isRevealed) return
    setIsRevealed(true)
    onReveal(cardId)
  }

  // Simple inline styles - NO CSS FILES NEEDED for this component
  const cardStyle = {
    width: '180px',
    height: '200px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: isRevealed ? 'default' : 'pointer',
    backgroundColor: isRevealed ? '#ffffff' : color,
    border: isRevealed ? '3px solid #ffd93d' : 'none',
    boxShadow: isRevealed 
      ? '0 10px 30px rgba(255, 217, 61, 0.4)' 
      : '0 10px 30px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    padding: '15px',
    textAlign: 'center',
    position: 'relative',
    minHeight: '200px',
    minWidth: '180px',
  }

  const frontStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    height: '100%',
    color: 'white',
  }

  const backStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '17px',
    padding: '12px',
    color: '#2d3436',
  }

  const emojiStyle = {
    fontSize: '50px',
    lineHeight: '1',
  }

  const textStyle = {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '1.5',
    color: '#2d3436',
    margin: '0',
    padding: '0',
    wordWrap: 'break-word',
    maxWidth: '100%',
  }

  const hintStyle = {
    fontSize: '13px',
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: '5px 15px',
    borderRadius: '20px',
    fontWeight: 'bold',
    color: 'white',
  }

  const checkStyle = {
    position: 'absolute',
    top: '10px',
    right: '12px',
    fontSize: '18px',
  }

  return (
    <div style={cardStyle} onClick={handleClick}>
      {!isRevealed ? (
        <div style={frontStyle}>
          <span style={emojiStyle}>{emoji}</span>
          <span style={hintStyle}>Click to Reveal ✨</span>
        </div>
      ) : (
        <div style={backStyle}>
          <span style={{ fontSize: '35px' }}>{emoji}</span>
          <p style={textStyle}>{reason}</p>
          <span style={checkStyle}>✅</span>
        </div>
      )}
    </div>
  )
}

export default ReasonCard