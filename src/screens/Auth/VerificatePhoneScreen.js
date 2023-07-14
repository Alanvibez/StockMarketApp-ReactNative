import RegisterLayout from '../../layouts/RegisterLayout';
import CustomInput from '../../components/UI/CustomInput';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function VerificatePhoneScreen() {
  const [timer, setTimer] = useState(300);
  const [code, setCode] = useState('1234');
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlerCheckCode = (text) => {
    if (text == code) {
      navigation.navigate('Password');
    }
  };

  return (
    <RegisterLayout
      title={'VerificatePhone'}
      subTitle={'enter confirmation code'}
    >
      <CustomInput
        type='numeric'
        onChangeText={handlerCheckCode}
        maxLength={4}
      />
      <Text className='color-[#6C6C6C] text-center text-[12px]'>
        send code again {formatTime(timer)}
      </Text>
    </RegisterLayout>
  );
}
