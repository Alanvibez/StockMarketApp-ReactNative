import { createSlice } from '@reduxjs/toolkit';
import { fetchStocks } from '../actions/stockAction';

const initialState = {
  stocks: [],
  isLoading: false,
  error: '',
};

export const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchStocks.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.stocks = action.payload;
    },
    [fetchStocks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchStocks.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default stockSlice.reducer;
