import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    flexDirection: 'row',
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipTokensIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default styles;
