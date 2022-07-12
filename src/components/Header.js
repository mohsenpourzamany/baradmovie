import React from "react";
import cam from '../assets/images/camera.png';
const Header = (props) => {
    return (
        <header className="row App-header">
            <div className="col-md-6">
                 <img src={cam} alt="/" />
            </div>
            <div className="col-md-6">
                <h1>{props.text}</h1>
            </div>
           
        </header>
    )
}

export default Header;