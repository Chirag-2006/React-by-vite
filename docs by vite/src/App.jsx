import React from 'react'
import Background from './components/Background'
import Forground from './components/Forground'

function App() {
  return (
    <div>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background />
        <Forground />
      </div>
    </div>
  )
}

export default App
