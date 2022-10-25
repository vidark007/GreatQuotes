import React, {useCallback, useEffect, useRef, useState} from 'react';
import ButtonQuote from "../../Layout/ButtonQuote";
import classes from './CommentSection.module.css'
import useHttp from "../../hooks/use-http";

function CommentSection(props) {
    const defaultButtonText = "Add a Comment";
    const [addCommentArea,setAddCommentArea] = useState(false);
    const [buttonText, setButtonText] = useState(defaultButtonText)
    const [comments, setComments] = useState([]);

    const commentRef = useRef()

    const fetchURL = { url : "/quote/comment/"+props.quouteID};

    useEffect(()=>{
        if(addCommentArea){
            setButtonText("Add comment")
        }
    },[addCommentArea])

    function loadCommentList(commentList){
        setComments(commentList.map((comment,index=0)=>{
            return {
                id: index,
                comment: comment.comment,
            }
        }));
    }

    const setNewCommentToList = useCallback((newComment)=>{
        setComments((prevState)=>([...prevState,newComment]))
    },[buttonText])

    function addNewComment(){
        const newComment = commentRef.current.value;
        console.log(newComment.trim().length)
        if(newComment.trim().length > 0) {
            const postUrl = {
                url: "/quote/addComment/" + props.quouteID,
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: newComment,
            }
            postNewComment(postUrl, () => setNewCommentToList(newComment))

            setAddCommentArea(false);
        }
    }

    const {sendRequest: fetchAllComments} = useHttp();
    const {sendRequest: postNewComment} = useHttp();


    useEffect(() =>{
        fetchAllComments(fetchURL,loadCommentList)
        console.log("useEffect")
    },[fetchAllComments])


    const maxChar = 380;
    return (
        <div className={classes['comment-section']}>
            <h2>User Comments</h2>
            {addCommentArea && <textarea ref={commentRef} maxLength={maxChar} placeholder={"Type a comment"}/>}
            <ButtonQuote buttonText={buttonText} onclick={!addCommentArea ? ()=>setAddCommentArea(true) : addNewComment}/>
            {comments.length !==0
                ?
                comments.map((comment) =>
                (<p key={comment.id}>{comment.comment}</p>))
                :
                <p>No comments were added !</p>
            }
        </div>
    );
}

export default CommentSection;