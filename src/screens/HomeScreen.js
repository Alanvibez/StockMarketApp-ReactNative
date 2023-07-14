import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserCards from '../components/UserCards';
import CustomLink from '../components/CustomLink';
import { useState } from 'react';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('Alikhan');
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const links = [
    {
      id: 1,
      title: 'transfer',
      icon: 'swap',
      navigateTo: 'Transfer',
    },
    {
      id: 2,
      title: 'world',
      icon: 'earth',
      navigateTo: 'Stock',
    },
    {
      id: 3,
      title: 'send',
      icon: 'user',
      navigateTo: 'Send',
    },
    {
      id: 4,
      title: 'more',
      icon: 'bars',
      navigateTo: 'More',
    },
  ];

  return (
    <SafeAreaView className='flex-1 mx-[16px]'>
      <View className='flex-row items-center justify-between pt-[18px]'>
        <View>
          <Text className='text-[20px]'>Welcome back</Text>
          <Text className='text-[32px] font-bold'>Hi, {userName}</Text>
        </View>
        <TouchableOpacity onPress={goToProfile}>
          <View className='w-[60px] h-[60px] bg-[#D7D7D9] rounded-full'></View>
        </TouchableOpacity>
      </View>
      <View className='pt-20 mb-[57px]'>
        <UserCards></UserCards>
      </View>
      <View style={styles.container}>
        {links.map((item) => (
          <CustomLink
            item={item}
            key={item.id}
            onPress={() => navigation.navigate(item.navigateTo)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
