import RegisterPhoneScreen from '../screens/Auth/RegisterPhoneScreen';
import VerificatePhoneScreen from '../screens/Auth/VerificatePhoneScreen';
import PasswordScreen from '../screens/Auth/PasswordScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='RegisterPhone'
        component={RegisterPhoneScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='VerificatePhone'
        component={VerificatePhoneScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Password'
        component={PasswordScreen}
      />
    </Stack.Navigator>
  );
}
