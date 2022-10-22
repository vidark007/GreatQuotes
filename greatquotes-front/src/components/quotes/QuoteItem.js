import React, {useCallback, useEffect, useState} from 'react';
import classes from './QuoteItem.module.css';
import ButtonQuote from "../../Layout/ButtonQuote";
import {Link} from "react-router-dom";
import useHttp from "../../hooks/use-http";

function QuoteItem(props) {
    const [quotes,setQuotes] = useState([]);

    const quotes_URL = {url : "http://localhost:8080/api/v1/great-quotes/quotes"};

    const loadQuotes = useCallback((quoteList) =>{
        setQuotes( quoteList.map((quote)=>{
            return {
                id: quote.id,
                author: quote.author,
                quote: quote.quote
            }
        }));
    },[])

    const {isLoading,error,sendRequest} = useHttp(quotes_URL,loadQuotes)

    useEffect(()=>{
        sendRequest();
    },[]);


    return (
        <>
            {quotes.map((quote) => (
                <li className={classes.item} key={quote.id}>
                    <figure>
                        <blockquote>
                            <p>{quote.quote}</p>
                        </blockquote>
                        <figcaption>{quote.author}</figcaption>
                    </figure>
                    <Link to={`/quotes/${quote.id}`}>
                        <ButtonQuote style={classes.button} buttonText={"View Fullscreen"} onclick={() => props.onFullQuoteView(quote.quote, quote.author)}/>
                    </Link>
                </li>
            ))}
        </>

    );
}

export default QuoteItem;