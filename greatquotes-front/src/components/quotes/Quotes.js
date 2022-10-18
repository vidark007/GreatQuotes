import React from 'react';
import classes from './Quotes.module.css'
import QuoteItem from "./QuoteItem";

function Quotes(props) {
    return (
        <div className={classes['container-quote']}>
            <button className={classes['button-asc']}>Sort Ascending</button>
            <div className={classes.line}/>
            <QuoteItem onFullQuoteView={props.onFullQuoteView}/>
        </div>
    );
}

export default Quotes;