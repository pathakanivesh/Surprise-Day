import { useEffect, useState } from 'react'
import './Fireworks.css'

function Fireworks({ active }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (!active) return

    // Create multiple bursts
    const burstInterval = setInterval(() => {
      createBurst()
    }, 800)

    // Initial burst
    createBurst()

    // Cleanup
    setTimeout(() => {
      clearInterval(burstInterval)
    }, 5000)

    return () => clearInterval(burstInterval)
  }, [active])

  const createBurst = () => {
    const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6bff', '#ff9f43', '#00d2d3', '#f368e0']
    const newParticles = []
    const centerX = Math.random() * 60 + 20 // 20% to 80%
    const centerY = Math.random() * 40 + 20 // 20% to 60%

    for (let i = 0; i < 30; i++) {
      const angle = (Math.PI * 2 * i) / 30 + Math.random() * 0.2
      const velocity = Math.random() * 150 + 80
      newParticles.push({
        id: Date.now() + i + Math.random(),
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        life: 1,
        decay: Math.random() * 0.015 + 0.01
      })
    }

    setParticles(prev => [...prev, ...newParticles])

    // Remove particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticles[0]?.id))
    }, 2000)
  }

  return (
    <div className="fireworks-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="firework-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `translate(${particle.vx * (1 - particle.life)}px, ${particle.vy * (1 - particle.life)}px)`,
            opacity: particle.life,
            boxShadow: `0 0 10px ${particle.color}`
          }}
        />
      ))}
    </div>
  )
}

export default Fireworks