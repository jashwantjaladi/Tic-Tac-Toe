import React from "react";

export default function Square(props)
{
    

    return(
        <button onClick={props.handleClick}>{props.text}</button>
    )
}   