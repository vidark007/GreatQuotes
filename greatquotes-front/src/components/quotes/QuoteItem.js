import React, {useCallback, useEffect, useState} from 'react';
import sha256 from 'crypto-js/sha256';
import classes from './QuoteItem.module.css';
import ButtonQuote from "../../Layout/ButtonQuote";
import {Link} from "react-router-dom";

function QuoteItem(props) {
    const [quotes,setQuotes] = useState([]);
    const [quotesAreLoading,setQuotesAreLoading] = useState(false);
    const [error, setError] = useState(null);


    const GREAT_QUOTES_API_BASE_URL = "http://localhost:8080/api/v1/great-quotes/quotes";

    const fetchQuotes = useCallback(async ()=> {
        setQuotesAreLoading(true);
        setError(null)
        try{
            const response = await fetch(GREAT_QUOTES_API_BASE_URL);
            if(!response.ok){
                throw new Error("Loading Problem");
            }
            const data = await response.json();
            const quoteList = data.map((quote)=>{
                    return {
                        id: quote.idQuote,
                        author: quote.author,
                        quote: quote.quote
                    }
                }
            )
            setQuotes(quoteList);
        }
        catch (error){
            setError(error.message);
            console.log(error.message)
        }
    setQuotesAreLoading(false);
    },[]);

    useEffect(()=>{
        fetchQuotes();
    },[fetchQuotes]);


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