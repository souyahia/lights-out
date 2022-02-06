import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7efe6',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 40,
    padding: 6,
    borderRadius: 10,
    position: 'absolute',
    left: 20,
    top: 0,
  },
  backButtonIcon: {
    width: 20,
    height: 20,
  },
});

export default styles;
