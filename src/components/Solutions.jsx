import React from 'react'

const Solutions = (props) => {

  return (
    <>
      <div className="questions-component">
        <div className="questions-container">
          <Question />
          <Question />
        </div>
        <button className="button-component" onClick={props.toggleInitial}>Play Again</button>
      </div>
    </>
  )
}

export default Solutions