import React from 'react'

const InitialPage = (props) => {
    return (
        <div className="initial-page">
            <div className="content">
                <h1>Quizzical</h1>
                <p>This is the simple quizz game app!</p>
                <button className="button-component" onClick={props.toggleInitial}>Start Quiz</button>
            </div>
        </div>
    )
}

export default InitialPage