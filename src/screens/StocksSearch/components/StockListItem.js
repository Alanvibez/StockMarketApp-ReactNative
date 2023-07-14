import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default function StockListItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{item.ticker}</Text>
      <View>
        <Text style={styles.text}>${item.price}</Text>
        <Text style={styles.subText}>
          {item.change_percentage} ({item.change_amount}$)
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingLeft: 17,
    paddingRight: 42,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#6aaaad',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    textAlign: 'right',
  },
  subText: {
    textAlign: 'right',
    fontSize: 10,
  },
});
