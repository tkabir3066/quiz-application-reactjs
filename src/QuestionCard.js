import React from "react";
import AnswerCard from "./AnswerCard";
const QuestionCard = ({ quiz, currentAnswers }) => {
  console.log(quiz);
  return (
    <div className="question-card">
      <h3>{quiz.question}</h3>
      {currentAnswers.map((answer, index) => (
        <AnswerCard key={index} answer={answer} />
      ))}
    </div>
  );
};

export default QuestionCard;
