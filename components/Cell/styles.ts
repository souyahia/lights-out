import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cell: {
    width: 60,
    height: 60,
    borderRadius: 5,
    borderColor: '#000000',
    borderWidth: 2,
  },
  on: {
    backgroundColor: 'blue'
  },
  off: {
    backgroundColor: 'red'
  }
});

export default styles;
