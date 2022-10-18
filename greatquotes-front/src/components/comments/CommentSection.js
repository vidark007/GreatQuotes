import React, {useEffect, useRef, useState} from 'react';
import ButtonQuote from "../../Layout/ButtonQuote";
import classes from './CommentSection.module.css'

function CommentSection(props) {
    const defaultButtonText = "Add a Comment";
    const [addCommentArea,setAddCommentArea] = useState(false);
    const [buttonText, setButtonText] = useState(defaultButtonText)

    useEffect(()=>{
        if(addCommentArea){
            setButtonText("Add comment")
        }
    },[addCommentArea])

    function addNewComment(){
        console.log("adding comment");
        setAddCommentArea(false);
    }

    const maxChar = 380;
    return (
        <div className={classes['comment-section']}>
            <h2>User Comments</h2>
            {addCommentArea && <textarea maxLength={maxChar}/>}
            <ButtonQuote buttonText={buttonText} onclick={!addCommentArea ? ()=>setAddCommentArea(true) : addNewComment}/>
            <p>No comments were added yet!</p>
        </div>
    );
}

export default CommentSection;