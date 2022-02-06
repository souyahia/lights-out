import { FC } from 'react';
import { FlatList, Image, View } from 'react-native';
import styles from './styles';

export type LevelGridMiniatureProps = {
  grid: boolean[];
  status: 'in-progress' | 'completed' | 'prefect',
}

const LevelGridMiniature: FC<LevelGridMiniatureProps> = ({ grid, status }) => {
  let listStyle = {};
  let completionIcon;
  switch (status) {
    case 'completed':
      listStyle = styles.completed;
      completionIcon = require('../../../assets/check.png');
      break;
    case 'prefect':
      listStyle = styles.perfect;
      completionIcon = require('../../../assets/star.png');
      break;
  }

  return (
    <View>
      <FlatList
        style={[styles.list, listStyle]}
        data={grid}
        numColumns={5}
        renderItem={({item}) => <View style={[styles.cell, item ? styles.on : styles.off]} />}
        keyExtractor={(item, index) => index.toString()}
      />
      {status === 'in-progress' ? <></> :
        <Image style={styles.completionIcon} source={completionIcon} />}
    </View>
    
  );
}

export default LevelGridMiniature;
