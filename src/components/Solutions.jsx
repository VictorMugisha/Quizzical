import React from 'react';
import { decode } from 'html-entities';

const Solutions = (props) => {
  const { askedQuestions, toggleInitial } = props;
  console.log("At least this rendered");
  return (
    <>
      <div className="questions-component">
        <div className="questions-container">
          {askedQuestions.map((question, qIndex) => (
            <div className="question" key={qIndex}>
              <h2 className="title">{decode(question.questionTitle)}</h2>
              <div className="possible-answers">
                {question.allAnswers.map((answer, aIndex) => {
                  const isSelected = answer.isSelected;
                  const isCorrect = answer.isCorrect;
                  let className = '';

                  if (isSelected && isCorrect) {
                    className = 'correct';
                  } else if (isSelected && !isCorrect) {
                    className = 'incorrect';
                  } else if (isCorrect) {
                    className = 'correct';
                  } else {
                    className = ''
                  }

                  return (
                    <div className={`possible-answer ${className}`} key={aIndex}>
                      {decode(answer.answerTitle)}
                    </div>
                  );
                })}
              </div>
              <div className="line"></div>
            </div>
          ))}
        </div>
        <button className="button-component" onClick={toggleInitial}>Play Again</button>
      </div>
    </>
  );
};

export default Solutions;
