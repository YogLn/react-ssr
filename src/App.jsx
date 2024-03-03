import React from 'react';
import {useState} from 'react';
import {Link, useRoutes} from 'react-router-dom';
import routes from './router';

const App = function () {
  const [counter, setCounter] = useState(100);

  function addCounter() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>App</h2>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>

      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      {/* 页面 */}
      {useRoutes(routes)}
    </div>
  );
};

export default App;
