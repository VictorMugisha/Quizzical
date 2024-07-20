import React from 'react'
import Question from './Question'
import Button from './Button'

const Solutions = (props) => {

  return (
    <>
      <div className="questions-component">
        <div className="questions-container">
          <Question />
          <Question />
        </div>
        <Button text="Play Again" onClick={props.toggleInitial}/>
      </div>
    </>
  )
}

export default Solutions