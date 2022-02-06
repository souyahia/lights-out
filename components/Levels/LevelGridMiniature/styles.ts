import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    borderWidth: 4,
    borderRadius: 4,
    borderColor: '#f7efe6',
  },
  completed: {
    borderColor: '#6dc370',
  },
  perfect: {
    borderColor: '#f8d53f',
  },
  completionIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{translateX: 6}, {translateY: -6}],
  },
  cell: {
    width: 20,
    height: 20,
    borderColor: '#002642',
    borderWidth: 1,
  },
  on: {
    backgroundColor: '#fcd977',
  },
  off: {
    backgroundColor: '#a69b8d',
  }
});

export default styles;
