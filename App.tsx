import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Grid from './components/Grid/Grid';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Grid />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
