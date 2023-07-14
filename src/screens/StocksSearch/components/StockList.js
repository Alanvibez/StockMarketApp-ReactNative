import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../../../store/actions/stockAction';
import StockListItem from './StockListItem';
import colors from '../../../constants/colors';

export default function StockList() {
  const dispatch = useDispatch();
  const stocks = useSelector((store) => store.stockSlice.stocks);
  const { most_actively_traded, top_gainers, top_losers } = stocks;
  console.log(stocks)
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.header}>Most activity</Text>}
        data={most_actively_traded}
        renderItem={({ item, index }) => <StockListItem key={index} item={item} />}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.header}>Most traded</Text>}
        data={top_gainers}
        renderItem={({ item, index }) => <StockListItem key={index} item={item} />}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.header}>Most loses</Text>}
        data={top_losers}
        renderItem={({ item,index }) => <StockListItem key={index} item={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: colors.primary,
    marginBottom: 5,
  },
});
