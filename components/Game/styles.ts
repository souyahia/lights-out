import { StyleSheet } from 'react-native';

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
  },
  levels: {
    borderRadius: 10,
    backgroundColor: '#f7efe6',
    borderWidth: 2,
    borderColor: '#2e2108',
    padding: 5,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  levelsIcon: {
    width: 30,
    height: 30,
  },
});

export default styles;
