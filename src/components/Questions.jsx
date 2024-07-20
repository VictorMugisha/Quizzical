import React from 'react'
import Question from './Question'
import Button from './Button'

const Questions = () => {
  return (
    <div className="questions-component">
      <div className="questions-container">
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
      <Button text="Check Answers" />
    </div>
  )
}

export default Questions