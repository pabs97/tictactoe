import { SQUARE_CLICK } from '../actions/types';

const initialState = {
  squares: Array(9).fill(null),
  counter: 0,
  xTurn: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SQUARE_CLICK:
      return {
        ...state,
        squares: action.squares,
        xTurn: action.xTurn,
        counter: action.counter,
      };
    default:
      return state;
  }
}
