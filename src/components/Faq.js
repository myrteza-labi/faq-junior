import React from 'react'; 
import './Faq.css'; 

function Faq(props) {
    return(
        <section className="Faq" >
            {props.children}
        </section>
    )
}

export default Faq; 