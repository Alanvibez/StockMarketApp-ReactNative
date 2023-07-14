import { StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { useState } from 'react';
import CustomButton from '../../components/UI/CustomButton';
import RegisterLayout from '../../layouts/RegisterLayout';
import { useNavigation } from '@react-navigation/native';

export default function RegisterPhoneScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);

  return (
    <RegisterLayout title={'Enter your phone number'}>
      <PhoneInput
        value={value}
        defaultCode='KZ'
        layout='first'
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        containerStyle={styles.input}
        textContainerStyle={styles.inputTextContainer}
        textInputStyle={{ color: '#06716A' }}
        codeTextStyle={{ color: '#B3B3B3' }}
        placeholder={' '}
      />
      <CustomButton
        title={'continue'}
        onPress={() => navigation.navigate('VerificatePhone')}
      />
    </RegisterLayout>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 12,
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderColor: '#B3B3B3',
    borderRadius: 15,
    width: '100%',
  },
  inputTextContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});
