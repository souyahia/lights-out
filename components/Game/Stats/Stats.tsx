import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import globalStyles from '../../../globalStyles';
import { useAppSelector } from '../../../store';
import styles from './styles';

const Stats: FC = () => {
  const {
    score,
    skipTokens,
    consecutiveWins,
    level,
    isLastLevel,
    levels,
  } = useAppSelector((state) => ({
    score: state.game.score ?? 0,
    skipTokens: state.game.skipTokens ?? 0,
    consecutiveWins: state.game.consecutiveWins ?? 0,
    userPressCount: state.game.userPressCount,
    level: state.levels.currentLevelId ?? 0,
    isLastLevel: state.levels.levels !== null && state.levels.currentLevelId === state.levels.levels.length - 1,
    levels: state.levels.levels ?? [],
  }));

  let personalBestText = levels.length === 0 || levels[level].userBestScore === null
    ? 'You have not completed this level yet.'
    : `Personal best : ${levels[level].userBestScore}`;
  if (levels.length !== 0 && levels[level].userBestScore !== null && levels[level].userBestScore == levels[level].minimalNumberOfPresses) {
    personalBestText += ' (perfect score)';
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.levelName}>Level {level + 1}</Text>
      {isLastLevel ? <></> : <Text style={styles.personalBestMessage}>{personalBestText}</Text>}
      {!isLastLevel ? <></> : <View style={styles.container}>
        <View style={globalStyles.statContainer}>
          <View style={globalStyles.statContainer}>
            <Image style={globalStyles.statIcon} source={require('../../../assets/trophy.png')} />
            <Text style={globalStyles.statText}>{score}</Text>
          </View>
          <View style={[
            styles.consecutiveWins,
            globalStyles.statContainer,
            consecutiveWins === 0 ? styles.hidden : {},
          ]}>
            <Image style={globalStyles.statIcon} source={require('../../../assets/fire.png')} />
            <Text style={globalStyles.statText}>{consecutiveWins}</Text>
          </View>
        </View>
        <View style={globalStyles.statContainer}>
          <Image style={globalStyles.statIcon} source={require('../../../assets/coin.png')} />
          <Text style={globalStyles.statText}>{skipTokens}</Text>
        </View>
      </View>}
    </View>
  );
}

export default Stats;
