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

  // Used for easier debugging
  // const solution = useAppSelector((state) => state.game.solution);

  return (
    <TouchableOpacity
      style={[
        styles.cell,
        activated ? styles.on : styles.off,

        // Used for easier debugging
        // solution[index] ? { borderWidth: 4 } : {},
      ]}
      onPress={() => dispatch(toggleCell(index))}
    />
  );
}

export default Cell;
