import React from 'react'; 
import './QuestionBox.css'; 

function QuestionBox(props) {
    return(
        <div className="QuestionBox" >
            {props.children}
        </div>
    )
}

export default QuestionBox; 