import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    flexDirection: 'row',
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scoreIcon: {
    width: 35,
    height: 35,
    marginRight: 5,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default styles;
