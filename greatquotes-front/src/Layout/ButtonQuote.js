import React from 'react';
import classes from "./ButtonQuote.module.css";

function ButtonQuote(props) {
    return (
        <button className={classes.button + " " + props.classname} onClick={props.onclick}>{props.buttonText}</button>
    );
}
export default ButtonQuote;