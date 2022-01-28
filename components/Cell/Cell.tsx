import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';

export type CellProps = {
  activated: boolean;
};

const Cell: React.FC<CellProps> = ({ activated }) => {
  return (
    <TouchableOpacity
      style={[styles.cell, activated ? styles.on : styles.off]}
    />
  );
}

export default Cell;
