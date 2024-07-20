import React from 'react';
import { decode } from 'html-entities';

const Question = (props) => {
    return (
        <div className="question-component">
            <div className="question">
                <h2 className="title">{decode(props.title)}</h2>
                <div className="possible-answers">
                    hello
                    {props.answers.map((answer, index) => (
                        // <div className="possible-answer" key={index}>
                        //     {decode(answer)}
                        // </div>
                        Helloo
                    ))}
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default Question;
