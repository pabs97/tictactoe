import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { squareClickAction } from '../actions/squareClick';
import { setWinnerAction } from '../actions/setWinner';
import Square from './square';

class Game extends Component {
  render() {
    return (
      <Fragment>
        {this.createHeader()}
        <section className="board">
          {this.createSquares()}
        </section>
      </Fragment>
    );
  }

  createHeader() {
    const { xTurn, winner, counter } = this.props;

    if (winner) {
      return <h4>{winner} wins!</h4>;
    } else if (counter === 9) {
      return <h4>It's a Draw!</h4>;
    } else {
      return <h4>{xTurn ? 'X' : 'O'}'s turn</h4>;
    }
  }

  createSquares() {
    return this.props.squares.map((square, i) => {
      return (
        <Square
          key={i}
          index={i}
          value={square}
          onSet={this.handleSquareClick}
        ></Square>
      )
    });
  }

  handleSquareClick = (index) => {
    let { xTurn, squares, winner, counter } = this.props;

    if (squares[index] || winner) return;

    const value = xTurn ? 'X' : 'O';
    xTurn = !xTurn;
    counter++;
    squares = squares.slice();
    squares[index] = value;

    this.props.squareClickAction(squares, xTurn, counter)
      .then(() => this.validateBoard(value));
  }

  validateBoard = (value) => {
    const { squares } = this.props;

    /* eslint-disable */
    if (
      (
        squares[0] === value && squares[1] === value && squares[2] === value ||
        squares[3] === value && squares[4] === value && squares[5] === value ||
        squares[6] === value && squares[7] === value && squares[8] === value
      ) ||
      (
        squares[0] === value && squares[3] === value && squares[6] === value ||
        squares[1] === value && squares[4] === value && squares[7] === value ||
        squares[2] === value && squares[5] === value && squares[8] === value
      ) ||
      (
        squares[0] === value && squares[4] === value && squares[8] === value ||
        squares[2] === value && squares[4] === value && squares[6] === value
      )
    ) {
      this.props.setWinnerAction(value);
    }
    /* eslint-enable */
  }
}

const mapStateToProps = state => {
  // Names used in combineReducers
  return { ...state.squareClickReducer, ...state.setWinnerReducer };
};

export default connect(mapStateToProps, { squareClickAction, setWinnerAction })(Game);
