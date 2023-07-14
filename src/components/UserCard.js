import { View, Text, StyleSheet } from 'react-native';

export default function UserCard({ zIndex, card, options }) {
  return (
    <View
      style={[styles.card, options && { ...options, position: 'absolute' }]}
    >
      <View style={styles.cardBefore}></View>
      <View style={styles.cardAfter}></View>
      <View className='w-full h-full text-white'>
        <View className='flex-row items-center justify-between'>
          <Text className='text-white'>COIN</Text>
          <Text className='text-white text-[26px]'>VISA</Text>
        </View>
        <View className='flex-row flex-1 items-end mb-[7px] justify-between'>
          <View>
            <Text></Text>
          </View>
          <View>
            <Text className='text-[14px] text-right text-white'>
              Total balance
            </Text>
            <Text className='text-[24px] text-white'>${card.balance}</Text>
          </View>
        </View>
        <View className='flex-row items-center justify-between'>
          <Text className='text-[14px] font-[500] text-white'>
            {card.number}
          </Text>
          <Text className='text-[14px] font-[500] text-white'>{card.date}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: 320,
    borderRadius: 15,
    backgroundColor: 'black',
    minHeight: 200,
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 17,
  },
  cardBefore: {
    position: 'absolute',
    right: -60,
    top: -115,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.07,
    transform: 'rotate(25deg)',
  },
  cardAfter: {
    position: 'absolute',
    right: -100,
    top: -100,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.12,
    transform: 'rotate(40deg)',
  },
});
