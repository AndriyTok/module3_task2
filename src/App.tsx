import React, { useState } from 'react';
import './App.css';
import QuestionSelector from './components/QuestionSelector';
import Test from './components/Test';

interface Answer {
  answer: string;
  isCorrect: boolean;
}

interface TestQuestion {
  question: string;
  answers: Answer[];
}

const App: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<TestQuestion[] | null>(null);

  const handleQuestionsSelected = (questions: TestQuestion[]) => {
    setSelectedQuestions(questions);
  };

  return (
      <div className="container">
        {selectedQuestions ? (
            <Test questions={selectedQuestions} />
        ) : (
            <QuestionSelector onQuestionsSelected={handleQuestionsSelected} />
        )}
      </div>
  );
};

export default App;
