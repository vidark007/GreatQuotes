import React, {useCallback, useEffect, useState} from 'react';
import classes from './FullQuoteView.module.css'
import CommentSection from "../comments/CommentSection";
import {useParams} from "react-router-dom";
import useHttp from "../../hooks/use-http";

function FullQuoteView(props) {
    const [detailedQuote,setDetailedQuote] = useState({
        id : 0,
        author: "test",
        quote:"text",
    });
    const [loadComments,setLoadComments] = useState(false);
    const params = useParams();

    const quoteIdURL = {url : "/quote/"+params.quoteId};

    function setQuote(quote){
        setDetailedQuote({
            id : quote.id,
            author : quote.author,
            quote : quote.quote,
        })
    }

   const {isLoading,error,sendRequest} = useHttp();

    useEffect(()=>{
        sendRequest(quoteIdURL,setQuote);
    },[])

    return (
        <>
            <p>{isLoading}</p>
            <p>{error}</p>
            <figure className={classes.figure}>
                <blockquote>
                    <p>{detailedQuote.quote}</p>
                </blockquote>
                <figcaption>{detailedQuote.author}</figcaption>
            </figure>

            <div className={classes['comment-section']}>
                {!loadComments ?
                    <a onClick={() => setLoadComments(true)}>Load Comments</a>
                    : <CommentSection quouteID={detailedQuote.id}/>}
            </div>
        </>

    );
}

export default FullQuoteView;