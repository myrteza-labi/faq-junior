import React from 'react'; 
import './Illustration.css'; 
import img1 from '../images/illustration-woman-online-desktop.svg'; 
import img2 from '../images/bg-pattern-mobile.svg'; 

function Illustration(props) {
    return(
        <div className="Illustration" >
            <img className="img1" src={img1} alt="une femme devant un ordinateur "/>
            <img className="img2" src={img2} alt="ombre"/>
        </div>
    )
}

export default Illustration; 