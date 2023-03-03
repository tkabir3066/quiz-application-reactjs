import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import ScoreCard from "./ScoreCard";
import shuffle from "./utils";

const App = () => {
  const [quizzes, setQuizzes] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [endGame, setEndGame] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [pickedAnswer, setPickedAnswer] = useState(null);

  const pickAnswer = (answer) => {
    setPickedAnswer(answer);
    if (answer === correctAnswer) {
      setTotalScore((prevScore) => prevScore + 1);
    }
    // console.log(answer);
  };

  const navigateNext = () => {
    const currentQuizIndex = currentQuestionIndex + 1;
    const validQuestionIndex = currentQuizIndex < quizzes.length;
    if (validQuestionIndex) {
      setCurrentQuestionIndex(currentQuizIndex);
      const question = quizzes[currentQuizIndex];
      setCurrentAnswers(shuffle(question));

      //reset picked answer
      setPickedAnswer(null);
      //setting correct answer on question navigation
      setCorrectAnswer(question.correct_answer);
    } else {
      setEndGame(true);
    }
  };

  const resetQuiz = () => {
    setQuizzes(null);
    setLoaded(false);
    setCurrentAnswers(null);
    setCorrectAnswer(null);
    setEndGame(false);
    setStartQuiz(false);
    setPickedAnswer(null);
    setTotalScore(0);
    setCurrentQuestionIndex(0);
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
    setCorrectAnswer(initialQuestion.correct_answer);
    // console.log(results);
  };
  return (
    <div className="container">
      {endGame && <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz} />}
      {!startQuiz && (
        <button
          className="start-quiz"
          onClick={fetchQuiz}
          style={{ display: "block", margin: "200px auto" }}
        >
          Start Quiz
        </button>
      )}

      {loaded && !endGame && (
        <QuestionCard
          quiz={quizzes[currentQuestionIndex]}
          currentAnswers={currentAnswers}
          currentQuestionIndex={currentQuestionIndex}
          quizzes={quizzes}
          navigateNext={navigateNext}
          pickAnswer={pickAnswer}
          correctAnswer={correctAnswer}
          pickedAnswer={pickedAnswer}
        />
      )}
    </div>
  );
};

export default App;
