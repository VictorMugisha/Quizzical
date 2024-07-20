import React from 'react'
import Button from './Button'

const InitialPage = () => {
    return (
        <div className="initial-page">
            <div className="content">
                <h1>Quizzical</h1>
                <p>This is the simple quizz game app!</p>
                <Button text="Start Quiz" />
            </div>
        </div>
    )
}

export default InitialPage