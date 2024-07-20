import React, { useState } from 'react'
import './App.css'
import InitialPage from './components/InitialPage'
import Questions from './components/Questions'

export default function App() {

  const [initial, setInitial] = useState(true)

  function toggleInitial() {
    setInitial(false)
  }

  return (
    <>
      {
        initial ? 
        <InitialPage toggleInitial={toggleInitial} /> :
        <Questions />
      }
    </>
  )
}

