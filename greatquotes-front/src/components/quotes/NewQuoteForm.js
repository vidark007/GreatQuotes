import React, {useState} from 'react';
import classes from "./NewQuoteForm.module.css"
import ButtonQuote from "../../Layout/ButtonQuote";
import useHttp from "../../hooks/use-http";

function reducer(state,action){
    if (action.type === "author"){
        if(action.input.length < 4){
            return ({errorText : "Author must at least have 4 characters", errorAuthorInput : true});
        }
        else{
            return ({errorText : "", errorAuthorInput : false});
        }
    }
    if (action.type === "quote"){
        if(action.input.length < 8){
            return ({errorText : "Quote must at least have 8 characters", errorQuoteInput : true});
        }
        else{
            return ({errorText : "", errorQuoteInput : false});
        }
    }
    //return({errorText : "", errorAuthorInput : false,errorQuoteInput: false  })
}
function NewQuoteForm() {

    const maxChar = 380;

    const[enteredAuthor, setEnteredAuthor] = useState('');
    const[enteredQuote, setEnteredQuote] = useState('');
    const [addedQuoteMessage,setAddedQuoteMessage] = useState(false);

    const [state, dispatch] =  React.useReducer(reducer,{
        errorText: "",
        errorAuthorInput: true,
        errorQuoteInput: true
    });

    function authorHandler(value){
        setEnteredAuthor(value)
        dispatch({type:'author',input:value})
    }

    function quoteHandler(value){
        setEnteredQuote(value);
        dispatch({type:'quote',input:value})

    }

    function addQuote(newQuote){
        newQuote.preventDefault();
        if(!state.errorAuthorInput && !state.errorQuoteInput &&
            enteredQuote.trim().length > 0 && enteredQuote.trim().length > 0){

            const postUrl =  {url : "/quote/newQuote",
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: {author : enteredAuthor, quote :enteredQuote}}
            sendRequest(postUrl )

            setAddedQuoteMessage(true)
            setEnteredAuthor("");
            setEnteredQuote("");

        }
    }

    const {sendRequest} = useHttp();

    return (
            <form className={classes.form} onSubmit={addQuote}>
                <div className={classes['form-group']}>
                    <label>Author</label>
                    <input minLength={4}
                           type="text"
                           value={enteredAuthor}
                           onChange={(e)=>authorHandler(e.target.value)}
                           placeholder={"Author"}/>
                </div>
                <div className={classes['form-group']}>
                    <label>Text</label>
                    <textarea minLength={8}
                              maxLength={maxChar}
                              value={enteredQuote}
                              onChange={(e)=>quoteHandler(e.target.value)}
                              placeholder={"Some interesting quote"}></textarea>
                </div>
                <ButtonQuote classname={classes['button-component']} buttonText={"Add Quotes"} />
                {state.errorAuthorInput|| state.errorQuoteInput && <p>{state.errorText}</p>}
                {addedQuoteMessage && <p>Quote was added to "Quotes"</p>}
            </form>
    );
}

export default NewQuoteForm;