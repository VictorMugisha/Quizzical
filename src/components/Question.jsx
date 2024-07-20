import React from 'react'

const Question = () => {
  return (
    <div className="question-component">
        <div className="question">
            <h2 className="title">How would you say goodbye in Spanish?</h2>
            <div className="possible-answers">
                <div className="possible-answer">
                    Adios
                </div>
                <div className="possible-answer">
                    Hola
                </div>
                <div className="possible-answer">
                    Au Revoir
                </div>
                <div className="possible-answer">
                    Salir
                </div>
                <div className="possible-answer">
                    Something
                </div>
            </div>
            <div className="line"></div>
        </div>
    </div>
  )
}

export default Question