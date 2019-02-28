import React from 'react';

function Info (props){

  const newGame = (event) => {
    event.preventDefault()
    window.location.reload()
  };


  return (
    <React.Fragment>
      <h1>I'm working!</h1>
      <div> {props.winner} </div>
      <button onClick={newGame}>Issa button</button>
    </React.Fragment>
  )
};

export default Info;
