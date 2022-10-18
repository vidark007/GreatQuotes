import React, {useState} from 'react';
import classes from './FullQuoteView.module.css'
import ButtonQuote from "../../Layout/ButtonQuote";
import CommentSection from "../comments/CommentSection";
import {useParams} from "react-router-dom";

function FullQuoteView(props) {
    const [loadComments,setLoadComments] = useState(false);
    const params = useParams();

    function onGetFullQuotes(quote){

    }

    return (
        <>
            <figure className={classes.figure}>
                <blockquote>
                    <p>{props.quote.quote}</p>
                </blockquote>
                <figcaption>{props.quote.author}</figcaption>
            </figure>

            <div className={classes['comment-section']}>
                {!loadComments ?
                    <a onClick={() => setLoadComments(true)}>Load Comments</a>
                    : <CommentSection/>}
            </div>
        </>

    );
}

export default FullQuoteView;