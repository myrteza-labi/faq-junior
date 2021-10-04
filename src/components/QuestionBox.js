import React from 'react'; 
import './QuestionBox.css'; 

function QuestionBox(props) {
    return(
        <div className="QuestionBox" >
            <p className="quesion" >{props.quesion}</p>
            <p className="answer">{props.answer}</p>
        </div>
    )
}

export default QuestionBox; 