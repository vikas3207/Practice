import React, { useState } from "react";
import { QuizeQuestions } from "../Data/QuizeQuestions";
import Result from "./Result";
import '../cssfiles/quiz.css'

function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clickedOption, setClickedOption] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [resultBtn, setResultBtn] = useState("next")



    
    const nextQuestion = () => {
        updateScore();
        if (currentQuestion < QuizeQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setClickedOption(0)
        } else {
            setShowResult(true)
        }
        if ((currentQuestion + 1) === 4)
            setResultBtn("Show Result")
    }
    const updateScore = () => {
        if (clickedOption === QuizeQuestions[currentQuestion].answer) {
            setScore(score + 1)
        }
    }
    const resetAll = () => {
        setCurrentQuestion(0)
        setScore(0);
        setShowResult(false)
        setClickedOption(0)
        setScore(0)
    } 
    return (
        <>
            <div>

                <div className="container">
                    <h4>Quize Game</h4>
                    <div className="question-content">
                        {showResult ? (<Result score={score} totalScore={QuizeQuestions.length} tryAgain={resetAll}/>) : (<>
                            <div className="Question">
                                <span className="question-number">{currentQuestion + 1}.</span>
                                <span className="question-text">{QuizeQuestions[currentQuestion].question}</span>
                            </div>
                            <div className="Option-block">
                                {QuizeQuestions[currentQuestion].options.map((options, index) => {
                                    return (

                                        <button className={`option-btn ${clickedOption===index+1 ? "checked" : null}`}
                                            key={index}
                                            onClick={() => { setClickedOption(index + 1) }}>
                                            {options}
                                        </button>



                                    )
                                })}
                            </div>
                            <input type="button" value={resultBtn} onClick={nextQuestion} />
                            {/* <input type="button" value="Back" onClick={backQuestion} /> */}
                        </>)}
                    </div>
                </div>

            </div>
        </>
    );
}
export default Quiz;