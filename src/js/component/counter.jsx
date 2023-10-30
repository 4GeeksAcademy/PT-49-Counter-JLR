//import react into the bundle
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const SimpleCounter = (props) =>{
    return (
        <div className="container clockcontainer">
            <div className="clock"><FontAwesomeIcon icon={faClock}/></div>
            <div className="sixDigits">{props.digitSix % 10}</div>
            <div className="fiveDigits">{props.digitFive % 10}</div>
            <div className="fourDigits">{props.digitFour % 10}</div>
            <div className="threeDigits">{props.digitThree % 10}</div>
            <div className="twoDigits">{props.digitTwo % 10}</div>
            <div className="oneDigit">{props.digitOne % 10}</div>
        </div>
    )
};

SimpleCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number,
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
    ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,

    document.querySelector("#app"));},1000);


export default SimpleCounter;
