import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    counter: 100,
    homeInfo: {},
  },
  reducers: {
    increment(state, {payload}) {
      state.counter += payload; // payload = 1
    },
    decrement(state, {payload}) {
      state.counter -= payload;
    },
    // 通过更新
    setHomeInfo(state, {payload}) {
      state.homeInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeInfo.fulfilled, (state, action) => {
      console.log(action);
      state.homeInfo = action.payload;
    });
  },
});
// 异步的action
export const fetchHomeInfo = createAsyncThunk(
  'fetchHomeInfo', // fetchHomeInfo/fulfiiled
  async (payload, {dispatch, getState}) => {
    const res = await axios.get('http://codercba.com:9060/juanpi/api/homeInfo');
    return res.data.data;
  }
);
// 同步的action: home/increment
export const {increment, decrement} = homeSlice.actions;
export default homeSlice.reducer;
