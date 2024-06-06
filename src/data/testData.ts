interface Answer {
    answer: string;
    isCorrect: boolean;
}

interface TestQuestion {
    question: string;
    answers: Answer[];
}

export const testData = {
    testName: "Тест по WEB дизайну",
    questions: [
        {
            question: "Вкажіть тег для блоку",
            answers: [
                { answer: "a", isCorrect: false },
                { answer: "div", isCorrect: true },
                { answer: "img", isCorrect: false },
                { answer: "p", isCorrect: false },
            ],
        },
        {
            question: "Вкажіть тег для гіперпосилання",
            answers: [
                { answer: "a", isCorrect: true },
                { answer: "div", isCorrect: false },
                { answer: "span", isCorrect: false },
                { answer: "p", isCorrect: false },
            ],
        },
        {
            question: "Який тег використовується для вставки зображення?",
            answers: [
                { answer: "img", isCorrect: true },
                { answer: "div", isCorrect: false },
                { answer: "span", isCorrect: false },
                { answer: "a", isCorrect: false },
            ],
        },
        {
            question: "Який тег використовується для вставки списку?",
            answers: [
                { answer: "ul", isCorrect: true },
                { answer: "div", isCorrect: false },
                { answer: "img", isCorrect: false },
                { answer: "span", isCorrect: false },
            ],
        },
        {
            question: "Який атрибут HTML використовується для визначення унікального ідентифікатора елемента?",
            answers: [
                { answer: "id", isCorrect: true },
                { answer: "class", isCorrect: false },
                { answer: "style", isCorrect: false },
                { answer: "href", isCorrect: false },
            ],
        },
    ],
};
