import React from 'react'
import Question from './Question'
import Button from './Button'

const Solutions = () => {

  function handleRestart() {

  }
  
  return (
    <>
      <div className="questions-component">
        <div className="questions-container">
          <Question />
          <Question />
        </div>
        <Button text="Play Again" onClick={handleRestart}/>
      </div>
    </>
  )
}

export default Solutions