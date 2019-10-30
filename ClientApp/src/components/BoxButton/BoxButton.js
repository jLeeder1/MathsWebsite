import React from "react"
import './BoxButton.css';
import Img from './battery0.jpg'

function BoxButton(props) {
    return (
        <div className="BoxButtonContainer">
            <img className="BoxButtonImg" src={Img} alt="Some image"></img>
            <p className="BoxButtonText">{props.BoxInfo.text}</p>
        </div>
    );
}
export default BoxButton