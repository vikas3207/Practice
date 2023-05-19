import React from 'react'
import '../cssfiles/quiz.css'

function Result(props) {
  return (
    <div className='Result-container'>
      <h3>Your Score: {props.score} </h3>
      <h3>Total score: {props.totalScore}</h3>
      <button className='tryAgain-btn' onClick={props.tryAgain}>Try Again</button>
    </div>
  )
}

export default Result
