import React, { Component, Fragment } from 'react';
import Square from './square';

class Game extends Component {
  state = {
    squares: Array(9).fill().map(() => null),
    counter: 0,
    xTurn: true,
    winner: null
  }

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
    const { xTurn, winner, counter } = this.state;

    if (winner) {
      return <h4>{winner} wins!</h4>;
    } else if (counter === 9) {
      return <h4>It's a Draw!</h4>;
    } else {
      return <h4>{xTurn ? 'X' : 'O'}'s turn</h4>;
    }
  }

  createSquares() {
    return this.state.squares.map((square, i) => {
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
    let { xTurn, squares, winner, counter } = this.state;

    if (squares[index] || winner) return;

    const value = xTurn ? 'X' : 'O';
    xTurn = !xTurn;
    counter++;

    squares = squares.slice();
    squares[index] = value;

    this.setState({ squares, xTurn, counter }, () => this.validateBoard(value));
  }

  validateBoard = (value) => {
    const { squares } = this.state;

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
    ) this.setState({ winner: value });
  }

}

export default Game;