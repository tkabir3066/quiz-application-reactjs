import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import shuffle from "./utils";

const App = () => {
  const [quizzes, setQuizzes] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const navigateNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    const question = quizzes[currentQuestionIndex];

    setCurrentAnswers(shuffle(question));
    console.log("navigate Next");
  };
  const fetchQuiz = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
    );
    const data = await res.json();
    const { results } = data;

    // getting all answers

    const initialQuestion = results[currentQuestionIndex];
    // const answers = [
    //   initialQuestion.correct_answer,
    //   ...initialQuestion.incorrect_answers,
    // ];
    setQuizzes(results);
    setLoaded(true);
    setStartQuiz(true);
    setCurrentAnswers(shuffle(initialQuestion));
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
            currentQuestionIndex={currentQuestionIndex}
            quizzes={quizzes}
            navigateNext={navigateNext}
          />
        )}
      </div>
    </>
  );
};

export default App;
