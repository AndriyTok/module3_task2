import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log('Component did mount');
    // Тут ви можете виконувати завантаження початкових даних або інші побічні ефекти
    return () => {
      console.log('Component will unmount');
      // Тут ви можете виконати очищення ресурсів
    };
  }, []);

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
