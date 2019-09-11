import React from "react";

const NumberButton = props => {

  let btn;

  if(props.number === "0"){
    btn = <button onClick = { () => props.number(props.num)} className="bigButton"> {props.buttonValue} </button>
  }
  else{
    btn = <button onClick = { () => props.number(props.num)} className="button"> {props.buttonValue} </button>
  }
  return (

    

    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      
      }

      
      
      {btn}

    </>
  );
};

export default NumberButton;