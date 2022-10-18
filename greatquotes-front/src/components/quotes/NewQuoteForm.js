import React, {useEffect, useState} from 'react';
import classes from "./NewQuoteForm.module.css"
import ButtonQuote from "../../Layout/ButtonQuote";

function NewQuoteForm() {
    const maxChar = 380;

    function addQuote(){
        //console.log("adding quote in db")
    }

    return (
            <form className={classes.form} onClick={addQuote}>
                <div className={classes['form-group']}>
                    <label>Author</label>
                    <input type="text"/>
                </div>
                <div className={classes['form-group']}>
                    <label>Text</label>
                    <textarea maxLength={maxChar}></textarea>
                </div>
                <ButtonQuote classname={classes['button-component']} buttonText={"Add Quotes"} />
            </form>
    );
}

export default NewQuoteForm;