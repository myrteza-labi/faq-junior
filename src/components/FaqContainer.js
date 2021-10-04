import React from 'react'; 
import './FaqContainer.css'; 

function FaqContainer(props) {
    return(
        <div className="FaqContainer" >
            {props.children}
        </div>
    )
}

export default FaqContainer; 