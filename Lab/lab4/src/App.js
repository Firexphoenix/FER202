import React from 'react';
import Quiz from './components/Quiz';
import { QuizProvider } from './components/QuizContext';

function App() {
  return (
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  );
}

export default App;
