import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    flexDirection: 'row',
  },
  statContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  consecutiveWinsContainer: {
    marginLeft: 10,
  },
  statIcon: {
    width: 35,
    height: 35,
    marginRight: 5,
  },
  statText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default styles;
