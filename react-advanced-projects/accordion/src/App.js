import React from 'react';
import Question from './Questions';
import './App.css';
import { questions } from './questionData';

function App() {

  const [questionData, setQuestionData] = React.useState(questions)

  const questionElements = questions.map(question => {
    return <Question question={question.question} answer={question.answer} />
  })
  return (
    <div className="app-container">
      <h1>Questions And Answers About Login</h1>
      {questionElements}
    </div>
  );
}

export default App;
