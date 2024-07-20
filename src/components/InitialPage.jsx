import React from 'react'

const InitialPage = (props) => {
    const linkedInUrl = "https://www.linkedin.com/in/victor-mugisha-shyaka-47b10b233/"
    return (
        <div className="initial-page">
            <div className="content">
                <h1>Quizzical</h1>
                <p>This is the simple quizz game app - Proudly Developed by <a target='_blank' href={linkedInUrl}>Victor M</a>!</p>
                <button className="button-component" onClick={props.toggleInitial}>Start Quiz</button>
            </div>
        </div>
    )
}

export default InitialPage