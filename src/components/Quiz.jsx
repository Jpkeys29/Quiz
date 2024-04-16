import { useState } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    function handleNextQuestion(selectedAnswer) {
        setUserAnswers(current => current + 1);
    }

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt='Trophy'/>
            <h2>You have completed the quiz!</h2>
        </div>
    }
    const shuffledAndswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAndswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer 
                    timeout={10000}
                    onTimeout={() => handleSelectAnswer(null)}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAndswers.map((answer, index) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}