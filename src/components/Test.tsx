import React, { useState, useCallback } from 'react';
import Question from './Question';

interface Answer {
    answer: string;
    isCorrect: boolean;
}

interface TestQuestion {
    question: string;
    answers: Answer[];
}

interface Props {
    questions: TestQuestion[];
}

const Test: React.FC<Props> = ({ questions }) => {
    const [score, setScore] = useState(0);
    const [completedQuestions, setCompletedQuestions] = useState(0);

    const handleAnswerSubmit = useCallback((isCorrect: boolean) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        setCompletedQuestions(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            {questions.map((q, index) => (
                <Question key={index} question={q} onAnswerSubmit={handleAnswerSubmit} />
            ))}
            {completedQuestions === questions.length && (
                <h2>Ваш результат: {score} з {questions.length}</h2>
            )}
        </div>
    );
};

export default Test;
