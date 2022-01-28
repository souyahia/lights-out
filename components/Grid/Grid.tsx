import React from 'react';
import { FlatList } from 'react-native';
import { useAppSelector } from '../../store';
import Cell from '../Cell/Cell';
import styles from './styles';

const Grid = () => {
  const grid = useAppSelector((state) => state.game.grid);

  return (
    <FlatList
      style={styles.list}
      data={grid.cells}
      numColumns={5}
      renderItem={({item}) => <Cell activated={item}/>}
    />
  );
}

export default Grid;
