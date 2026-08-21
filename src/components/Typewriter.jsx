import { useEffect, useRef, useState } from 'react'

function Typewriter({ text, onComplete, delay = 50 }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      if (onComplete) {
        setTimeout(onComplete, 500) // Small delay before triggering
      }
    }
  }, [currentIndex, text, delay, onComplete, isComplete])

  return (
    <div style={{ 
      fontFamily: 'Georgia, serif',
      fontSize: '18px',
      lineHeight: '1.8',
      color: '#2d3436',
      textAlign: 'left',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    }}>
      {displayText}
      {!isComplete && (
        <span style={{
          display: 'inline-block',
          width: '3px',
          height: '20px',
          backgroundColor: '#ff6b6b',
          marginLeft: '2px',
          animation: 'blink 0.7s ease-in-out infinite'
        }} />
      )}
    </div>
  )
}

export default Typewriter