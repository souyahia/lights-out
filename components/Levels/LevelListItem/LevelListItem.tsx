import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Level } from '../../../game/level';
import { RootStackParamList } from '../../../navigation/stack';
import { useAppDispatch } from '../../../store';
import { selectLevel } from '../../../store/LevelsState';
import LevelGridMiniature from '../LevelGridMiniature';
import styles from './styles';

export type LevelListItemProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Levels'>;
  level: Level;
  currentLevelId: number;
}

const LevelListItem: FC<LevelListItemProps> = ({ navigation, level, currentLevelId }) => {
  const dispatch = useAppDispatch();

  const isCurrentLevel = currentLevelId === level.id;
  let currentLevelStatus: 'in-progress' | 'completed' | 'prefect' = level.completed ? 'completed' : 'in-progress';
  if (level.completed && level.userBestScore === level.minimalNumberOfPresses) {
    currentLevelStatus = 'prefect';
  }

  const selectThisLevel = () => {
    if (level.id !== currentLevelId) {
      dispatch(selectLevel(level.id));
    }
    navigation.navigate('Game');
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => selectThisLevel()}>
      <View style={[styles.currentLevelDotContainer, isCurrentLevel ? {} : styles.hidden]}>
        <View style={styles.currentLevelDot} />
      </View>
      <LevelGridMiniature grid={level.grid} status={currentLevelStatus} />
      <View style={styles.levelInfo}>
        <Text style={styles.levelName}>Level {level.id + 1}{isCurrentLevel ? ' (current)' : ''}</Text>
        <View style={styles.targetContainer}>
          <Image style={styles.targetIcon} source={require('../../../assets/target.png')} />
          <Text style={styles.targetText}>{level.minimalNumberOfPresses}</Text>
        </View>
        <Text style={[
          styles.personalBest,
          level.completed && !!level.userBestScore ? {} : styles.hidden,
        ]}>
          Personal best : {level.userBestScore ?? 0}
        </Text>
      </View>
    </TouchableOpacity>
  
  );
}

export default LevelListItem;
