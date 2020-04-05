import { SET_WINNER } from './types';

export const setWinnerAction = winner => dispatch => {
  dispatch({ type: SET_WINNER, winner });
}