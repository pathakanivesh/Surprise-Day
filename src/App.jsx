import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Card from './pages/Card'
import Surprise from './pages/Surprise'
import Finale from './pages/Finale'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/finale" element={<Finale />} />
      </Routes>
    </div>
  )
}

export default App