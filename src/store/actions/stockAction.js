import axios from '../../axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import apiConstants from '../../constants/apiConstants';

export const fetchStocks = createAsyncThunk(
  'stock/fetchAPI',
  async (_, userApi) => {
    try {
      const responce = await axios.get(
        `query?function=TOP_GAINERS_LOSERS&apikey=${apiConstants.apiKey}`,
      );
      return responce.data;
    } catch (e) {
      return userApi.rejectWithValue('Ошибка.');
    }
  },
);
