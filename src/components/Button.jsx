import React from 'react'

const Button = (props) => {
  return (
    <button 
      className="button-component"
      onClick={props.onClick}
    >
        {props.text}
    </button>
  )
}

export default Button