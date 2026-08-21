import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import FloatingBalloons from '../components/FloatingBalloons'
import Typewriter from '../components/Typewriter'
import './Card.css'

function Card() {
  const navigate = useNavigate()
  const [showConfetti, setShowConfetti] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [messageFinished, setMessageFinished] = useState(false)

  // Handle window resize for confetti
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

  // Trigger confetti when message finishes
  const handleMessageComplete = () => {
    setMessageFinished(true)
    setShowConfetti(true)
    setShowButton(true)
    
    setTimeout(() => {
      setShowConfetti(false)
    }, 3000)
  }

  // Personalized message for Ashee with Anivesh credit
  const message = `Happy Birthday, My Dearest Ashee! 🎂💖

आज का दिन सिर्फ तुम्हारा है, और मैं चाहता हूँ कि तुम जानो कि तुम मेरे लिए कितनी खास हो।

आपकी असली खूबसूरती आपके अंदर है - आपका दयालु दिल, आपकी मुस्कान जो किसी का भी दिन रोशन कर देती है, और आपकी वह ताकत जो कभी हार नहीं मानती। 💫

तुम सिर्फ मेरी सबसे अच्छी दोस्त नहीं हो - तुम मेरी ताकत हो, मेरा सपोर्ट सिस्टम हो, और मेरी सबसे बड़ी खुशी हो। 


तुमसे मिलकर मेरी ज़िंदगी बदल गई - बेहतर हो गई। हर दिन तुम्हारी दोस्ती एक नई सुबह की तरह है, जो उम्मीद और खुशी लेकर आती है।

याद रखना, चाहे कुछ भी हो, मैं हमेशा तुम्हारे साथ हूँ। हर मुश्किल घड़ी में, हर खुशी के पल में - बस एक कॉल दूर। 🤗

तुम बहुत खूबसूरत हो - न सिर्फ बाहर से, बल्कि अंदर से भी। तुम्हारी आत्मा बहुत शुद्ध और प्यारी है, और तुम इस दुनिया को एक बेहतर जगह बनाती हो।

Today, on your special day, I want you to know that you are truly one of a kind. Your kindness, your strength, your beautiful soul - everything about you is extraordinary.

Keep shining, keep smiling, and always stay the amazing person you are. The world is a brighter place because you're in it! ✨

Happy Birthday, Ashee! 
This is YOUR year! 🎉

With all my love and gratitude,
Your Best Friend Forever 💝

P.S. - I'm always just a text away! Always. 💕

🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈

✨ This Surprise is brought to you with lots of love by - ANIVESH ✨

आपकी दोस्ती मेरी सबसे बड़ी ताकत है, आशी! ❤️`

  return (
    <div className="card-page">
      {/* Confetti Celebration */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.2}
          colors={['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bff', '#ff9f43', '#ff4757', '#ff69b4', '#00d2d3']}
        />
      )}

      {/* Floating Balloons Background - REPLACED HEARTS */}
      <FloatingBalloons />

      {/* Main Card Content */}
      <div className="message-card">
        <div className="card-header">
          <span className="header-emoji">🎈</span>
          <h2>For My Dearest Ashee 💫</h2>
          <span className="header-emoji">🎈</span>
        </div>

        <div className="message-content">
          <Typewriter 
            text={message}
            onComplete={handleMessageComplete}
            delay={25}
          />
        </div>

        {showButton && (
          <button 
            className="next-btn"
            onClick={() => navigate('/surprise')}
          >
            Next Surprise 🎈
          </button>
        )}

        {!messageFinished && (
          <div className="typing-indicator">
            <span>🎈</span>
            <span>Writing your special message...</span>
            <span>🎈</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default Card