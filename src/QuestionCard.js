import React from "react";
import AnswerCard from "./AnswerCard";
const QuestionCard = ({
  quiz,
  currentAnswers,
  currentQuestionIndex,
  quizzes,
  navigateNext,
  pickAnswer,
  correctAnswer,
  pickedAnswer,
}) => {
  return (
    <div className="question-card">
      <p>
        Question : {currentQuestionIndex + 1}/{quizzes.length}
      </p>
      <h3>{quiz.question}</h3>
      {currentAnswers.map((answer, index) => (
        <AnswerCard
          answer={answer}
          key={index}
          pickAnswer={pickAnswer}
          correctAnswer={correctAnswer}
          pickedAnswer={pickedAnswer}
        />
      ))}

      <button onClick={navigateNext}>Next</button>
    </div>
  );
};

export default QuestionCard;
