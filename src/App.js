import React, { useState } from "react";

const App = () => {
  const [quizzes, setQuizzes] = useState(null);
  const fetchQuiz = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&type=multiple"
    );
    const data = await res.json();
    const { results } = data;

    setQuizzes(results);
    console.log(results);
  };
  return (
    <div>
      <button onClick={fetchQuiz}>Start Quiz</button>
    </div>
  );
};

export default App;
