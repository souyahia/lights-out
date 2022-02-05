import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  targetMissed: {
    color: '#a33131',
  },
  targetInRange: {
    color: '#000000',
  }
});

export default styles;
