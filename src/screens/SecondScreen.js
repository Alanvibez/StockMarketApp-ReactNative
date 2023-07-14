import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const SecondScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 items-center justify-center'>
        <Text>This is SecondPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondScreen;
