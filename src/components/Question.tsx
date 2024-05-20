import React, { useState } from 'react';

interface Answer {
    answer: string;
    isCorrect: boolean;
}

interface TestQuestion {
    question: string;
    answers: Answer[];
}

interface Props {
    question: TestQuestion;
    onAnswerSubmit: (isCorrect: boolean) => void;
}

const Question: React.FC<Props> = ({ question, onAnswerSubmit }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerChange = (answer: string) => {
        setSelectedAnswer(answer);
    };

    const handleSubmit = () => {
        if (selectedAnswer) {
            const isCorrect = question.answers.find(a => a.answer === selectedAnswer)?.isCorrect || false;
            setSubmitted(true);
            onAnswerSubmit(isCorrect);
        }
    };

    return (
        <div className="question">
            <h3>{question.question}</h3>
            <div className="answers">
                {question.answers.map((a, index) => (
                    <div key={index}>
                        <label>
                            <input
                                type="radio"
                                name={question.question}
                                value={a.answer}
                                checked={selectedAnswer === a.answer}
                                onChange={() => handleAnswerChange(a.answer)}
                                disabled={submitted}
                            />
                            {a.answer}
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} disabled={submitted}>Підтвердити</button>
            {submitted && (
                <p className={question.answers.find(a => a.answer === selectedAnswer)?.isCorrect ? 'correct' : 'incorrect'}>
                    {question.answers.find(a => a.answer === selectedAnswer)?.isCorrect ? 'Правильна відповідь!' : 'Неправильна відповідь!'}
                </p>
            )}
        </div>
    );
};

export default Question;
