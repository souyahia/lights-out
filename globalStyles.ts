import { StyleSheet } from "react-native";

export const primaryColor = '#f018b3';

const globalStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: primaryColor,
    borderRadius: 10,
    padding: 10,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 20,
  }
});

export default globalStyles;