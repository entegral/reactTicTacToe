import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';

function Info (props){

  const newGame = (event) => {
    event.preventDefault()
    window.location.reload()
  };

  const renderSquare = (i) => {
    return <Square
      value={i} />;
  }

  const turnSummaryStyle = {
    margin: '10px',
    display: 'flex',
    flexDirection: 'row'
  };

  const renderSummary = (turn) => {
    console.log(turn.squares)
    return (
      <li style={turnSummaryStyle}>
        <div className="board-row">
          {renderSquare(turn.squares[0])}
          {renderSquare(turn.squares[1])}
          {renderSquare(turn.squares[2])}
        </div>
        <div className="board-row">
          {renderSquare(turn.squares[3])}
          {renderSquare(turn.squares[4])}
          {renderSquare(turn.squares[5])}
        </div>
        <div className="board-row">
          {renderSquare(turn.squares[6])}
          {renderSquare(turn.squares[7])}
          {renderSquare(turn.squares[8])}
        </div>
      </li>
    );
  };


  return (
    <React.Fragment>
      <h1>I'm working!</h1>
      <div> {props.winner} </div>
      <button onClick={newGame}>Issa button</button>
      <h3>Turn summary:</h3>
      <ol>
        {
          props.turnSummary.map((turn) => {
            return (
              renderSummary(turn)
            );
          }
        )}
      </ol>
    </React.Fragment>
  )
};

const mapStateToProps = state => {
  return {
    turnSummary: state.history
  };
};

export default connect(mapStateToProps) (Info);
