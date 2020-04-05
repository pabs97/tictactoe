import { SQUARE_CLICK } from './types';

export const squareClickAction = (squares, xTurn, counter) => (dispatch) => {
  dispatch({ type: SQUARE_CLICK, squares, xTurn, counter });

  return Promise.resolve();
}