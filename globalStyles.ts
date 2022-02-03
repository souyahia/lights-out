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
  }
});

export default globalStyles;