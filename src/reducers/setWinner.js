import { SET_WINNER } from '../actions/types';

const initialState = { winner: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      }
    default:
      return state;
  }
}
