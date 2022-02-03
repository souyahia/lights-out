import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import GameControls from './components/GameControls';
import Grid from './components/Grid/Grid';
import Stats from './components/Stats';
import WinOverlay from './components/WinOverlay';
import store, { initStoreFromSecureStore } from './store';

export default function App() {
  useEffect(() => { initStoreFromSecureStore(); }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Stats />
        <Grid />
        <GameControls />
      </View>
      <WinOverlay />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    width: 200,
    height: undefined,
    aspectRatio: 891/535,
    marginBottom: 20,
  }
});
