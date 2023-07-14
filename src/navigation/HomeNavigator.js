import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StockScreen from '../screens/StocksSearch/StockScreen';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/colors';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          flex: 1,
        },
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='HomeMain'
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Profile'
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          title: 'Most active traded',
          headerTitleStyle: {
            color: colors.primary,
            fontSize: 24,
          },
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: false,
          },
        }}
        name='Stock'
        component={StockScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
