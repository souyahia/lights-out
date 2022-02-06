import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store, { initStore } from './store';
import Game from './components/Game';
import Levels from './components/Levels';
import { RootStackParamList } from './navigation/stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => { initStore(); }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Game" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Levels" component={Levels} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
