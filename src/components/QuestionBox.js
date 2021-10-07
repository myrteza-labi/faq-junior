import React from 'react'; 
import './QuestionBox.css'; 




document.addEventListener("DOMContentLoaded", () =>{
    const QuestionBoxes = document.querySelectorAll(".QuestionBox");
    QuestionBoxes.forEach((QuestionBox) => QuestionBox.addEventListener("click", () =>{
  
        if(QuestionBox.classList.contains("active")){
            QuestionBox.classList.toggle("active")
        }
    else{
        QuestionBoxes.forEach(QuestionBox => QuestionBox.classList.remove("active"))
        QuestionBox.classList.add("active")
        }

    }))
}) 





function QuestionBox(props) {
    return(
        <div onClick={props.handleClickHanswer} className="QuestionBox" >
            <p className="question" >{props.question}</p>
            <p className={props.answerClassName}>{props.answer}</p>
        </div>
    )
}

export default QuestionBox; 
/*

document.addEventListener("DOMContentLoaded", () =>{
    const QuestionBoxes = document.querySelectorAll(".QuestionBox");
    QuestionBoxes.forEach((QuestionBox) => QuestionBox.addEventListener("click", () =>{
  
        if(QuestionBox.classList.contains("active")){
            QuestionBox.classList.toggle("active")
        }
    else{
        QuestionBoxes.forEach(QuestionBox => QuestionBox.classList.remove("active"))
        QuestionBox.classList.add("active")
        }

    }))
}) 

*/ 