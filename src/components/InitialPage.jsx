import React from 'react'
import Button from './Button'

const InitialPage = (props) => {
    return (
        <div className="initial-page">
            <div className="content">
                <h1>Quizzical</h1>
                <p>This is the simple quizz game app!</p>
                {/* <Button text="Start Quiz" onClick={props.toggleInitial} /> */}
                <button
                    className="button-component"
                    onClick={props.toggleInitial}
                >
                    Start Quiz
                </button>
            </div>
        </div>
    )
}

export default InitialPage