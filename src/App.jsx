import React from "react"
import Square from "./Square"
import { useState } from "react"
import "./App.css"
import "./Square.css"


function App() {
const[textArray,setTextArray]=React.useState(Array(9).fill(null))
const[xIsNext,setXisNext]=React.useState(true)


function handleClick(i)
{
  if (textArray[i] || checkWinner(textArray)) {
    return;
  }
 
const setSquares = textArray.slice()
 if (xIsNext) {
  setSquares[i] = "X";
} else {
  setSquares[i] = "O";
}
 setTextArray(setSquares)
 setXisNext(!xIsNext)
}

const winner = checkWinner(textArray);
let status;
if (winner) {
  status = "Winner: " + winner;
} else {
  status = "Next player: " + (xIsNext ? "X" : "O");
}
function checkWinner(textArray)
{
  const winnerArray=[ [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]]

for(let i=0;i<winnerArray.length;i++)
{
  const [a,b,c]=winnerArray[i]
  if(textArray[a]&& textArray[a] === textArray[b] && textArray[a] === textArray[c])
  {
    return textArray[a];
  }
}
return null
};
function reload()
{
  location.reload();
}

  return(
    <div className="main">
    <div className="container">   
    <Square text={textArray[0]} handleClick={()=>handleClick(0)}/>
    <Square text={textArray[1]} handleClick={()=>handleClick(1)}/>
    <Square text={textArray[2]} handleClick={()=>handleClick(2)}/>
    <Square text={textArray[3]} handleClick={()=>handleClick(3)}/>
    <Square text={textArray[4]} handleClick={()=>handleClick(4)}/>
    <Square text={textArray[5]} handleClick={()=>handleClick(5)}/>
    <Square text={textArray[6]} handleClick={()=>handleClick(6)}/>
    <Square text={textArray[7]} handleClick={()=>handleClick(7)}/>
    <Square text={textArray[8]} handleClick={()=>handleClick(8)}/>
   </div>
   <div>{status}</div>
   <button onClick={reload}>RELOAD</button>
   </div>

  )
}

export default App
