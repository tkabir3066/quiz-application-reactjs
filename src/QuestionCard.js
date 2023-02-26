import React from "react";
import AnswerCard from "./AnswerCard";
const QuestionCard = ({
  quiz,
  currentAnswers,
  currentQuestionIndex,
  quizzes,
  navigateNext,
}) => {
  return (
    <div className="question-card">
      <p>
        Question : {currentQuestionIndex + 1}/{quizzes.length}
      </p>
      <h3>{quiz.question}</h3>
      {currentAnswers.map((answer, index) => (
        <AnswerCard key={index} answer={answer} />
      ))}

      <button onClick={navigateNext}>Next</button>
    </div>
  );
};

export default QuestionCard;
