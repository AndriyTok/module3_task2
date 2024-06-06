export interface Answer {
    answer: string;
    isCorrect: boolean;
}

export interface TestQuestion {
    question: string;
    answers: Answer[];
}

export interface QuestionSelectorProps {
    onQuestionsSelected: (questions: TestQuestion[]) => void;
}

export interface TestProps {
    questions: TestQuestion[];
}

export interface QuestionProps {
    question: TestQuestion;
    onSubmit: (isCorrect: boolean) => void;
}
