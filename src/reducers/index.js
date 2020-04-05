import { combineReducers } from 'redux';
import squareClick from './squareClick';
import setWinner from './setWinner';

export default combineReducers({
  squareClickReducer: squareClick,
  setWinnerReducer: setWinner
});
