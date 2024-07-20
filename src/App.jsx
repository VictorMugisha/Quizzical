import React, { useState } from 'react'
import InitialPage from './components/InitialPage'
import Questions from './components/Questions'
import './App.css'

export default function App() {

  const [initial, setInitial] = useState(true)

  function toggleInitial() {
    setInitial(prevState => !prevState)
  }

  return (
    <>
      {
        initial ? 
        <InitialPage toggleInitial={toggleInitial} /> :
        <Questions toggleInitial={toggleInitial} />
      }
    </>
  )
}

