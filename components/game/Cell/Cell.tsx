import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useAppDispatch } from '../../../store';
import { toggleCell } from '../../../store/GameState';
import styles from './styles';

export type CellProps = {
  index: number;
  activated: boolean;
};

const Cell: FC<CellProps> = ({ index, activated }) => {
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      style={[styles.cell, activated ? styles.on : styles.off]}
      onPress={() => dispatch(toggleCell(index))}
    />
  );
}

export default Cell;
