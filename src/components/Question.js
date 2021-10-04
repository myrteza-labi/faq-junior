import React from 'react'; 
import './Question.css'; 

function Question(props) {
    return(
        <p className="Question" >
            {props.children}
        </p>
    )
}

export default Question; 