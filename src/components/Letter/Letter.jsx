import React from 'react'
import './Letter.css'

const Letter = ({ individualLetterInfo }) => {
    const status = individualLetterInfo.status

    const statusClass = {
        correct: "test-Letter-correct",
        incorrect: "test-Letter-incorrect",
        not: "test-Letter-not",
    }[status];

    return (
        <span className= {`test-Letter ${statusClass}`}>
            {individualLetterInfo.testLetter}
        </span>
    )
}

export default Letter;
