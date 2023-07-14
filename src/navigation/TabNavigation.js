import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SecondScreen from '../screens/SecondScreen';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        labelStyle: { fontSize: 18 },
        tabBarStyle: {
          position: 'relative',
          borderRadius: 10,
          backgroundColor: '#6AAAA629',
          elevation: 0,
          borderTopWidth: 0,
          paddingTop: 10,
          height: 100,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name='home'
                size={24}
                color={focused ? '#055A55' : '#ADB3BC'}
              />
            </View>
          ),
        }}
        name='Home'
        component={HomeNavigator}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name='chatbubbles-outline'
                size={24}
                color={focused ? '#055A55' : '#ADB3BC'}
              />
            </View>
          ),
        }}
        name='Second'
        component={SecondScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name='notifications-outline'
                size={24}
                color={focused ? '#055A55' : '#ADB3BC'}
              />
            </View>
          ),
        }}
        name='Second2'
        component={SecondScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name='user'
                size={26}
                color={focused ? '#055A55' : '#ADB3BC'}
              />
            </View>
          ),
        }}
        name='Second3'
        component={SecondScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
