import { View, Text } from 'react-native';
import RegisterLayout from '../../layouts/RegisterLayout';
import CustomInput from '../../components/UI/CustomInput';

export default function PinScreen() {
  return (
    <RegisterLayout title={'Create a PIN'} subTitle={'for easier access'}>
      <CustomInput password={true} type={'numeric'} maxLength={4} />
    </RegisterLayout>
  );
}
