import React, { useEffect, useState } from 'react'
import Solutions from './Solutions'
import { decode } from 'html-entities'

import getRandomQuestions from "../data.js"

const Questions = (props) => {
  const [checkAnswers, setCheckAnswers] = useState(true)


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

  const getRealQuestions = (n) => getRandomQuestions(n).map(question => {
    return {
      questionTitle: question.question,
      allAnswers: getRandomizedAnswers(question),
      correctAnswer: question.correct_answer
    }
  })

  return (
    <>
      {
        checkAnswers ?
          <div className="questions-component">
            <div className="questions-container">
              {
                getRealQuestions(4).map((question, index) => (
                  <div className="question" key={index}>
                    <h2 className="title">{decode(question.questionTitle)}</h2>
                    <div className="possible-answers">
                      {
                        question.allAnswers.map((answer, index) => (
                          <div className="possible-answer" key={index}>
                            {decode(answer)}
                          </div>
                        ))
                      }
                    </div>
                    <div className="line"></div>
                  </div>
                ))
              }

            </div>
            <button className="button-component" onClick={() => setCheckAnswers(false)}>Check Answers</button>
          </div> :
          <Solutions toggleInitial={props.toggleInitial} />
      }
    </>
  )
}

export default Questions