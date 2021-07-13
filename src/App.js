import React from 'react';
import Ball from './Component/Ball';
import Bat from './Component/Bat';
import Todo from './Component/Todo';
import { Provider } from "react-redux";
import store from './store';
function App() {
  return (
    // 4
    <Provider store={store}>
      <div className="App">
        <Ball></Ball>
        <Bat></Bat>
        <Todo></Todo>
      </div>
    </Provider>
  );
}
export default App;