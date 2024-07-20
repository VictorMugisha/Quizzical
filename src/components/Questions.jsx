import React, { useState } from 'react'
import Question from './Question'
import Button from './Button'
import Solutions from './Solutions'

const Questions = (props) => {

  const [checkAnswers, setCheckAnswers] = useState(true)

  function showAnswers() {
    setCheckAnswers(false)
  }

  return (
    <>
      {
        checkAnswers ?
        <div className="questions-component">
          <div className="questions-container">
            <Question />
            <Question />
            <Question />
            <Question />
          </div>
          <Button text="Check Answers" onClick={showAnswers} />
        </div> :
        <Solutions toggleInitial={props.toggleInitial} />
      }
    </>
  )
}

export default Questions