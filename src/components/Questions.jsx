import React, { useState } from 'react';
import Solutions from './Solutions';
import { decode } from 'html-entities';
import getRandomQuestions from '../data.js';

const Questions = (props) => {
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [questions, setQuestions] = useState(getRealQuestions(5));

  function getRandomizedAnswers(question) {
    const answers = [...question.incorrect_answers, question.correct_answer].map(answer => {
      return {
        answerTitle: answer,
        isSelected: false,
        isCorrect: answer === question.correct_answer
      };
    });
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

  function getRealQuestions(n) {
    return getRandomQuestions(n).map(question => {
      return {
        questionTitle: question.question,
        allAnswers: getRandomizedAnswers(question),
        correctAnswer: question.correct_answer
      };
    });
  }

  function handleChooseAnswer(event, question, answer) {
    event.stopPropagation();
    setQuestions(prevQuestions =>
      prevQuestions.map(prevQuestion => {
        if (prevQuestion.questionTitle === question.questionTitle) {
          const newAnswers = prevQuestion.allAnswers.map(an => {
            if (an.answerTitle === answer.answerTitle) {
              return {
                ...an,
                isSelected: !an.isSelected
              };
            } else {
              return {
                ...an,
                isSelected: false
              };
            }
          });
          return {
            ...prevQuestion,
            allAnswers: newAnswers
          };
        } else {
          return prevQuestion;
        }
      })
    );
  }

  return (
    <>
      {checkAnswers ? (
        <Solutions askedQuestions={questions} toggleInitial={props.toggleInitial} />
      ) : (
        <div className="questions-component">
          <div className="questions-container">
            {questions.map((question, qIndex) => (
              <div className="question" key={qIndex}>
                <h2 className="title">{decode(question.questionTitle)}</h2>
                <div className="possible-answers">
                  {question.allAnswers.map((answer, aIndex) => (
                    <div
                      className={`possible-answer ${answer.isSelected ? 'held' : ''}`}
                      key={aIndex}
                      onClick={(event) => handleChooseAnswer(event, question, answer)}
                    >
                      {decode(answer.answerTitle)}
                    </div>
                  ))}
                </div>
                <div className="line"></div>
              </div>
            ))}
          </div>
          <button className="button-component" onClick={() => setCheckAnswers(true)}>
            Check Answers
          </button>
        </div>
      )}
    </>
  );
};

export default Questions;
