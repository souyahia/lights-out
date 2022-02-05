import { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import GameControls from './components/GameControls';
import Grid from './components/Grid/Grid';
import Stats from './components/Stats';
import UserPressCounter from './components/UserPressCounter';
import WinOverlay from './components/WinOverlay';
import store, { initStoreFromSecureStore } from './store';

export default function App() {
  useEffect(() => { initStoreFromSecureStore(); }, []);

  const background = require('./assets/background.png');
  const logo = require('./assets/logo.png');

  return (
    <Provider store={store}>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
          <Stats />
          <Grid />
          <UserPressCounter />
          <GameControls />
        </View>
      </ImageBackground>
      <WinOverlay />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: undefined,
    aspectRatio: 891/535,
    marginBottom: 20,
  }
});
