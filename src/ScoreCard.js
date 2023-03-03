import React from "react";

const ScoreCard = ({ totalScore, resetQuiz }) => {
  return (
    <div className="result">
      <h3>Result Page</h3>
      <p>Score : {totalScore}</p>
      <button onClick={resetQuiz} className="btn restart-btn">
        Reset Quiz
      </button>
    </div>
  );
};

export default ScoreCard;
