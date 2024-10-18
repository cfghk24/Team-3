import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

const Quiz = () => {
    const [currentQuestionId, setCurrentQuestionId] = useState(1);
    const [resultPet, setResultPet] = useState(null);
    
    const currentQuestion = quizData.find(q => q.id === currentQuestionId);

    const handleAnswer = (nextQuestionId, result) => {
        if (result) {
            setResultPet(result);
        } else if (nextQuestionId) {
            setCurrentQuestionId(nextQuestionId);
        }
    };

    return (
        <div className="container">
            <h1>HK SPCA Pet Adoption Quiz</h1>
            {!resultPet ? (
                <>
                    <h2>{currentQuestion.question}</h2>
                    <ul>
                        {currentQuestion.options.map((option, index) => (
                            <li key={index} onClick={() => handleAnswer(option.nextQuestionId, option.resultPet)}>
                                {option.answer}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <h2>Your ideal pet is a {resultPet}!</h2>
            )}
        </div>
    );
};

export default Quiz;