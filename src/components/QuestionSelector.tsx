import React, { useState, useEffect } from 'react';
import { testData } from '../data/testData';

interface Answer {
    answer: string;
    isCorrect: boolean;
}

interface TestQuestion {
    question: string;
    answers: Answer[];
}

interface Props {
    onQuestionsSelected: (selectedQuestions: TestQuestion[]) => void;
}

const QuestionSelector: React.FC<Props> = ({ onQuestionsSelected }) => {
    const [selectedQuestions, setSelectedQuestions] = useState<TestQuestion[]>([]);

    useEffect(() => {
        console.log('QuestionSelector component did mount');
        return () => {
            console.log('QuestionSelector component will unmount');
        };
    }, []);

    const handleCheckboxChange = (question: TestQuestion) => {
        setSelectedQuestions(prevSelected =>
            prevSelected.includes(question)
                ? prevSelected.filter(q => q !== question)
                : [...prevSelected, question]
        );
    };

    const handleSubmit = () => {
        onQuestionsSelected(selectedQuestions);
    };

    return (
        <div>
            <h2>{testData.testName}</h2>
            {testData.questions.map((q, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(q)}
                        />
                        {q.question}
                    </label>
                </div>
            ))}
            <button onClick={handleSubmit}>Створити тест</button>
        </div>
    );
};

export default QuestionSelector;
