import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stockSlice from './slices/stockSlice';

const rootReducer = combineReducers({
  stockSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
