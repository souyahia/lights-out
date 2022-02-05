import { StyleSheet } from 'react-native';

export const primaryColor = '#eb6095';
export const primaryColorDisabled = '#f3b0e0';

const globalStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    padding: 10,
  },
  primaryButtonDisabled: {
    backgroundColor: primaryColorDisabled,
    borderRadius: 10,
    padding: 10,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 20,
  },
  statContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  statIcon: {
    width: 35,
    height: 35,
    marginRight: 5,
  },
  statText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default globalStyles;