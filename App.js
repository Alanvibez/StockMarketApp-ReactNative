import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import TabNavigation from './src/navigation/TabNavigation';
import store from './src/store/store';
import { Provider } from 'react-redux'

const App = () => {
  
  return (
    <Provider store={store}>
     <NavigationContainer>
      <TabNavigation/>
      {/* <AuthNavigator/> */}
    </NavigationContainer>
    </Provider>
  );
};


export default App;