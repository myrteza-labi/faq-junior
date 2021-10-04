import React from 'react'; 
import './Faq.css'; 

function Faq(props) {
    return(
        <section className="Faq" >
            <h2> FAQ </h2>
            {props.children}
        </section>
    )
}

export default Faq; 