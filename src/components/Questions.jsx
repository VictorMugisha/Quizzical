import React, { useEffect, useState } from 'react'
import Question from './Question'
import Button from './Button'
import Solutions from './Solutions'

import questionsData from "../data.js"

const Questions = (props) => {

  const [checkAnswers, setCheckAnswers] = useState(true)

  function showAnswers() {
    setCheckAnswers(false)
  }

  function getRandomizedAnswers(question) {
    const answers = [
      ...question.incorrect_answers,
      question.correct_answer
    ];
    return shuffleArray(answers);
  }

  // Fisher-Yates (aka Knuth) Shuffle Algorithm
  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const questionComponents = questionsData.slice(0, 5).map(question => {
    const answers = getRandomizedAnswers(question);
    console.log(answers);
    return <Question key={question.question} title={question.question} answers={answers} correctAnswer={correctAnswer} />
  })

  return (
    <>
      {
        checkAnswers ?
          <div className="questions-component">
            <div className="questions-container">
              kello
              {/* {questionComponents} */}
            </div>
            {/* <Button text="Check Answers" onClick={showAnswers} /> */}
            <button
              className="button-component"
              onClick={showAnswers}
            >
              Check Answers
            </button>
          </div> :
          <Solutions toggleInitial={props.toggleInitial} />
      }
    </>
  )
}

export default Questions