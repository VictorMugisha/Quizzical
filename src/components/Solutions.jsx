import React from 'react';
import { decode } from 'html-entities';
import Confetti from 'react-confetti';

const Solutions = (props) => {
  const { askedQuestions, toggleInitial } = props;

  // Function to calculate the number of correct answers
  const calculateScore = () => {
    return askedQuestions.reduce((score, question) => {
      const selectedAnswer = question.allAnswers.find(answer => answer.isSelected);
      if (selectedAnswer && selectedAnswer.isCorrect) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const score = calculateScore();

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
                    className = '';
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
        {score >= 3 && <Confetti />}
        <div className="footer">
          <h2>You got {score}/{askedQuestions.length} marks!</h2>
          <button className="button-component" onClick={toggleInitial}>Play Again</button>
        </div>
      </div>
    </>
  );
};

export default Solutions;
