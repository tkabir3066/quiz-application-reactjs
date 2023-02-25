import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

const App = () => {
  const [quizzes, setQuizzes] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const fetchQuiz = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
    );
    const data = await res.json();
    const { results } = data;

    // getting all answers

    const initialQuestionIndex = results[currentQuestionIndex];
    const answers = [
      initialQuestionIndex.correct_answer,
      ...initialQuestionIndex.incorrect_answers,
    ];
    setQuizzes(results);
    setLoaded(true);
    setStartQuiz(true);
    setCurrentAnswers(answers);
    // console.log(results);
  };
  return (
    <>
      {!startQuiz && <button onClick={fetchQuiz}>Start Quiz</button>}
      <div className="container">
        {loaded && (
          <QuestionCard
            quiz={quizzes[currentQuestionIndex]}
            currentAnswers={currentAnswers}
          />
        )}
      </div>
    </>
  );
};

export default App;
