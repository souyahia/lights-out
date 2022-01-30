import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleCell } from '../../store/GameState';
import styles from './styles';

export type CellProps = {
  index: number;
  activated: boolean;
};

const Cell: React.FC<CellProps> = ({ index, activated }) => {
  const state = useAppSelector(s => s);
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      style={[styles.cell, activated ? styles.on : styles.off]}
      onPress={() => dispatch(toggleCell(index))}
    />
  );
}

export default Cell;
