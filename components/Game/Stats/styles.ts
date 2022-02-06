import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  consecutiveWins: {
    marginLeft: 10,
  },
  hidden: {
    opacity: 0,
  },
  levelName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  personalBestMessage: {
    fontSize: 15,
    marginBottom: 10,
  }
});

export default styles;
