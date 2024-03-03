import React, {memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../store/modules/home';

const About = function () {
  // 获取redux state
  const {counter} = useSelector((rootState) => {
    return {
      counter: rootState.home.counter,
    };
  });
  const dispatch = useDispatch();

  function addCounter() {
    dispatch(increment(2)); // +2
  }
  return (
    <div className='app' style={{border: '1px solid blue', margin: '20px'}}>
      <h2>About</h2>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>
    </div>
  );
};

export default About;
