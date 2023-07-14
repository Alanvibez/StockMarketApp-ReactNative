import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import UserCard from './UserCard';

export default function UserCards() {
  const [isRotated, setIsRotated] = useState(false);

  const [cards, setCards] = useState([
    {
      id: 1,
      number: '5282 3456 7890 1289',
      balance: '12,003.05',
      date: '09/25',
    },
    {
      id: 2,
      number: '5282 3456 7890 1289',
      balance: '12,003.05',
      date: '09/25',
    },
    {
      id: 3,
      number: '5282 3456 7890 1289',
      balance: '12,003.05',
      date: '09/25',
    },
  ]);

  const cardOptions = [
    {
      top: 0,
      width: '100%',
      backgroundColor: '#25363E',
      transform: 'rotate(0deg)',
      zIndex: 0,
    },
    {
      top: isRotated ? -25 : -8,
      width: isRotated ? '100%' : 310,
      backgroundColor: '#DBDB48',
      right: isRotated ? 0 : 0,
      transform: isRotated ? 'rotate(-10deg)' : 'rotate(0deg)',
      zIndex: -1,
    },
    {
      top: isRotated ? -50 : -16,
      width: isRotated ? '100%' : 300,
      backgroundColor: '#388D88',
      right: isRotated ? 0 : 0,
      transform: isRotated ? 'rotate(-20deg)' : 'rotate(0deg)',
      zIndex: -2,
    },
  ];

  const handleClick = () => {
    setIsRotated(!isRotated);
  };
  return (
    <Pressable
      className='h-[200px] mt-[16px] flex-row justify-center'
      onPress={handleClick}
    >
      <View className='relative w-[320px]'>
        {cards.map((item, index) => (
          <UserCard zIndex={index} card={item} options={cardOptions[index]} />
        ))}
      </View>
    </Pressable>
  );
}
