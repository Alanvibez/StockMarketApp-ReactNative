import { SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../../components/UI/CustomInput';
import StockList from './components/StockList';

export default function StockScreen() {
  return (
    <ScrollView className='flex-1'>
      <SafeAreaView className='mx-[16px]'>
        <StockList />
      </SafeAreaView>
    </ScrollView>
  );
}
