import { Image, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Grid from './components/game/Grid/Grid';
import WinOverlay from './components/WinOverlay';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Grid />
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
