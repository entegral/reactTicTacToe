import React from 'react';
import Square from './Square';
import calculateWinner from '../HelperFunctions';
import { connect } from 'react-redux';
import Info from './Info';

class Board extends React.Component {


  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleFillSquare = this.handleFillSquare.bind(this);
  }


  handleFillSquare (squareId) {

    const gameState = {...this.props.gameState};
    const latestGame = {...this.props.latestGame};

    const { dispatch } = this.props;

    if(calculateWinner(latestGame.squares) || latestGame.squares[squareId]){
      return;
    }

    latestGame.squares[squareId] = (gameState.xIsNext ? 'X' : 'O');
    gameState.xIsNext = !gameState.xIsNext;

    const action = {
      type: 'FILL_SQUARE',
      squares: latestGame.squares,
      xIsNext: gameState.xIsNext,
      history: gameState.history
    }
    dispatch(action);
  }


  renderSquare(i) {
    return <Square
      value={this.props.latestGame.squares[i]}
      onClick={() => {this.handleFillSquare(i)}} />;
  }


  render() {
    const winner = calculateWinner(this.props.latestGame.squares);
    let status;
    let currentGameState = null

    if (winner) {
      status = 'Winner ' + winner;
      return (<Info winner={status}/>)
    } else {
      status = 'Next player: ' + (this.props.gameState.xIsNext ? 'X' : 'O');
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    gameState: state,
    latestGame: state.history[state.history.length - 1]
  };
};

export default connect(mapStateToProps)(Board);
