import React from 'react';
import Square from './Square';
import calculateWinner from '../HelperFunctions';
import { connect } from 'react-redux';

class Board extends React.Component {


  constructor(props) {
    super(props);
    console.log('constructor',props.gameState)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
        xIsNext: true
    };
    this.handleFillSquare = this.handleFillSquare.bind(this);
  }


  handleFillSquare (squareId) {

    const gameState = {...this.props.gameState};

    const { dispatch } = this.props;

    if(calculateWinner(gameState.squares) || gameState.squares[squareId]){
      return;
    }

    gameState.squares[squareId] = (gameState.xIsNext ? 'X' : 'O');
    gameState.xIsNext = !gameState.xIsNext;

    const action = {
      type: 'FILL_SQUARE',
      squares: gameState.squares,
      isNext: gameState.xIsNext
    }
    dispatch(action);
  }


  renderSquare(i) {
    return <Square
      value={this.props.gameState.squares[i]}
      onClick={() => {this.handleFillSquare(i)}} />;
  }


  render() {
    const winner = false;
    let status;

    if (winner) {
      status = 'Winner ' + winner;
    } else {
      status = 'Next player: ' + (this.props.gameState.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameState: state
  };
};

export default connect(mapStateToProps)(Board);
