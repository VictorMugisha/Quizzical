import React from 'react'

const Button = (props) => {
  return (
    <button className="button-component">
        {props.text}
    </button>
  )
}

export default Button