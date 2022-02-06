import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';
import { FlatList } from 'react-native';
import { RootStackParamList } from '../../../navigation/stack';
import { useAppSelector } from '../../../store';
import LevelListItem from '../LevelListItem';
import styles from './styles';

export type LevelsListProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Levels'>;
}

const LevelsList: FC<LevelsListProps> = ({ navigation }) => {
  const { levels, currentLevelId } = useAppSelector((state) => ({
    levels: state.levels.levels ?? [],
    currentLevelId: state.levels.currentLevelId ?? 0,
  }));

  return (
    <FlatList
      style={styles.list}
      data={levels}
      renderItem={({item}) => <LevelListItem
        navigation={navigation}
        level={item}
        currentLevelId={currentLevelId}
      />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default LevelsList;
