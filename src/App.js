import React from 'react';
import './App.css';
import Game from './components/board';
import './style/style.css';
import './index.css';

import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Game></Game>
    </Provider>
  );
}

export default App;