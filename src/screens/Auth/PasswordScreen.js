import { View, Text } from 'react-native';
import React from 'react';
import RegisterLayout from '../../layouts/RegisterLayout';
import CustomInput from '../../components/UI/CustomInput';
import CustomButton from '../../components/UI/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function PasswordScreen() {
  const navigate = useNavigation();
  return (
    <RegisterLayout title={'Hello'} subTitle={'enter your password'}>
      <CustomInput password={true} />
      <CustomButton title={'continue'} />
    </RegisterLayout>
  );
}
