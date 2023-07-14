import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View className='flex-1 bg-slate-700 z-0'>
      <TouchableOpacity onPress={() => navigation.navigate('HomeMain')}>
        <Text>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
