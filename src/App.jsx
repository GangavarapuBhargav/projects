import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './components/Demo'

function App() {
  const name1 = "Bhargav"
  const name2 = "Sai Karthikeya"

  return (
    <>
      <Demo name1={name1} name2={name2} />
      
    </>
  )
}

export default App
