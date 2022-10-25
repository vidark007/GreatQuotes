import React, {useCallback, useEffect, useState} from 'react';
import classes from './QuoteItem.module.css';
import ButtonQuote from "../../Layout/ButtonQuote";
import {Link} from "react-router-dom";
import useHttp from "../../hooks/use-http";

function QuoteItem(props) {
    const [quotes,setQuotes] = useState([]);

    const quotes_URL = {url : "/quotes"};

    const loadQuotes = useCallback((quoteList) =>{
        setQuotes( quoteList.map((quote)=>{
            return {
                id: quote.id,
                author: quote.author,
                quote: quote.quote
            }
        }));
    },[])

    const {isLoading,error,sendRequest} = useHttp()

    useEffect(()=>{
        sendRequest(quotes_URL,loadQuotes);
    },[]);


    return (
        <>
            <p>{isLoading}</p>
            <p>{error}</p>
            {quotes.map((quote) => (
                <li className={classes.item} key={quote.id}>
                    <figure>
                        <blockquote>
                            <p>{quote.quote}</p>
                        </blockquote>
                        <figcaption>{quote.author}</figcaption>
                    </figure>
                    <Link to={`/quotes/${quote.id}`}>
                        <ButtonQuote style={classes.button} buttonText={"View Fullscreen"}/>
                    </Link>
                </li>
            ))}
        </>

    );
}

export default QuoteItem;