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
      data={grid}
      numColumns={5}
      renderItem={({item, index}) => <Cell index={index} activated={item}/>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default Grid;
