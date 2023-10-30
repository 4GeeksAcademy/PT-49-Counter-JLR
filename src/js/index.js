import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "../styles/index.css";


const SimpleCounter = (props) =>{
    return (
        <div className="container clockcontainer">
            <div className="clock"><FontAwesomeIcon icon={faClock}/></div>
            <div>{props.digitSix % 10}</div>
            <div>{props.digitFive % 10}</div>
            <div>{props.digitFour % 10}</div>
            <div>{props.digitThree % 10}</div>
            <div>{props.digitTwo % 10}</div>
            <div>{props.digitOne % 10}</div>
        </div>
    )
};
let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter ++;
    console.log(one, two, three)
    ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,

    document.querySelector("#app"));},1000);









