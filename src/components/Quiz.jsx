import { useState } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Answers from "./Answers.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState('');

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    function handleNextQuestion(selectedAnswer) {
        setUserAnswers(current => current + 1);
    }

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt='Trophy' />
            <h2>Congratulations!</h2>
            <h4>You have completed the quiz</h4>
        </div>
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <Answers 
                answers={QUESTIONS[activeQuestionIndex].answers} selectedAnswer={userAnswers[userAnswers.length - 1]}
                answerState={answerState} />
                <div>
                    <progress value={activeQuestionIndex / userAnswers.length} max={userAnswers} 
                    onSelect={handleSelectAnswer}
                    />
                </div>
                {/* <button onClick={handleNextQuestion}>Next</button> */}

            </div>
        </div>
    )
}