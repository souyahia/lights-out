import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    elevation: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sprite: {
    width: 300,
    height: undefined,
    aspectRatio: 1755/1082,
    marginBottom: 20,
  },
  additionalMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  additionalMessageText: {
    fontSize: 20,
    color: '#ffffff',
  },
  skipTokenEarningIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default styles;
