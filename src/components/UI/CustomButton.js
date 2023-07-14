import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='bg-[#06716A] rounded-2xl py-[16px]'
    >
      <Text className='text-white text-[14px] text-center'>{title}</Text>
    </TouchableOpacity>
  );
}
