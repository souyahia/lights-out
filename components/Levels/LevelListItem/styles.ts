import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#262626',
  },
  currentLevelDotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  currentLevelDot: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#262626',
  },
  levelInfo: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  levelName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  targetContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  targetIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  targetText: {
    fontSize: 15,
  },
  personalBest: {
    fontSize: 15,
  },
  hidden: {
    opacity: 0,
  }
});

export default styles;
