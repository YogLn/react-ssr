import React, {memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, fetchHomeData} from '../store/modules/home';

const Home = function () {
  // 获取redux state
  const {counter} = useSelector((rootState) => {
    return {
      counter: rootState.home.counter,
    };
  });
  const dispatch = useDispatch();

  function addCounter() {
    dispatch(increment(2)); // +2
    dispatch(fetchHomeInfo());
  }

  return (
    <div className='app' style={{border: '1px solid green', margin: '20px'}}>
      <h2>Home</h2>
      <div>{counter}</div>
      <button onClick={addCounter}>+2</button>
    </div>
  );
};

export default Home;
