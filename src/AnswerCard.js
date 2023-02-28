import React from "react";

const AnswerCard = ({ answer, pickAnswer, correctAnswer, pickedAnswer }) => {
  const isRightAnswer = pickedAnswer && answer === correctAnswer;
  const isWrongAnswer =
    pickAnswer && answer === pickedAnswer && pickedAnswer !== correctAnswer;
  const correctClass = isRightAnswer ? "correct-answer" : "";
  const wrongClass = isWrongAnswer ? "incorrect-answer" : "";
  const disabledClass = pickedAnswer && "disabled-answer";
  // user selected answer
  // picked answer
  //correct answer
  return (
    <div
      className={`quiz-answer ${correctClass} ${wrongClass} ${disabledClass}`}
      onClick={() => pickAnswer(answer)}
    >
      {answer}
    </div>
  );
};

export default AnswerCard;
