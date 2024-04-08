import { useState } from "react";
import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length;

    function handleNextQuestion() {
        setUserAnswers(current => current + 1);
    }

    return (
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <button onClick={handleNextQuestion} disabled={userAnswers === activeQuestionIndex -1}>Next</button>
        </div>
    )
}