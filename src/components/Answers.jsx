import QUESTIONS from '../questions.js';

export default function Answers({ answers, selectedAnswer, answerState, onSelect, activeQuestionIndex }) {
    const shuffledAndswers = [...answers];
    shuffledAndswers.sort(() => Math.random() - 0.5);

    return (
        <>
            <ul id="answers">
                {shuffledAndswers.map((answer, index) => (
                    <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}