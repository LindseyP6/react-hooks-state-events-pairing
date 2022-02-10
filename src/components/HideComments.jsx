import React from 'react';
import Comments from "./Comments"
import {useState} from "react"

function HideComments({comments}) {
    const [isDisplayed, setIsDisplayed] = useState(true)

    function toggleComments(){
        setIsDisplayed(isDisplayed => !isDisplayed)
    }

  return (
    <>
    <button onClick={toggleComments}>{isDisplayed ? 'Hide Comments' : "Show Comments"}</button>
    {isDisplayed? 
    <Comments key={comments.id} comments={comments}/> : null}
    </>
  );
}

export default HideComments;
