import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from '../../../globalStyles';
import { useAppDispatch, useAppSelector } from '../../../store';
import { createNewLevel, selectLevel } from '../../../store/LevelsState';
import styles from './styles';

const WinOverlay: FC = () => {
  const {
    isWon,
    consecutiveWins,
    minimalNumberOfPresses,
    userPressCount,
    levels,
    currentLevelId,
  } = useAppSelector((state) => ({
    isWon: state.game.isWon,
    consecutiveWins: state.game.consecutiveWins ?? 0,
    minimalNumberOfPresses: state.game.minimalNumberOfPresses,
    userPressCount: state.game.userPressCount,
    levels: state.levels.levels ?? [],
    currentLevelId: state.levels.currentLevelId ?? 0,
  }));
  const dispatch = useAppDispatch();

  const displayedSprite = consecutiveWins % 50 === 0
    ? require('../../../assets/50-in-a-row.png')
    : require('../../../assets/win.png');
  const hasSomeSkipTokensBeenEarned = consecutiveWins % 5 === 0;
  const isPerfectScore = userPressCount === minimalNumberOfPresses;
  
  const isLastLevel = levels.length === 0 || currentLevelId === levels.length - 1;
  const nextUnfinishedLevelId = isLastLevel ? 0 : levels.slice(currentLevelId + 1).filter(level => !level.completed)[0].id;

  return isWon ? (
    <View style={styles.overlay}>
      <Image style={styles.sprite} source={displayedSprite} />
      {!hasSomeSkipTokensBeenEarned ? <></> :
        <View style={styles.additionalMessage}>
          <Text style={styles.additionalMessageText}>5 wins in a row ! (</Text>
          <Image style={styles.skipTokenEarningIcon} source={require('../../../assets/coin.png')} />
          <Text style={styles.additionalMessageText}>+1)</Text>
        </View>}
      {!isPerfectScore ? <></> :
        <View style={styles.additionalMessage}>
          <Text style={styles.additionalMessageText}>Perfect score !</Text>
        </View>}
      <TouchableOpacity style={globalStyles.primaryButton} onPress={() => { isLastLevel
        ? dispatch(createNewLevel())
        : dispatch(selectLevel(nextUnfinishedLevelId))}}>
        <Text style={globalStyles.primaryButtonText}>{isLastLevel ? 'New Level' : 'Next Unfinished Level'}</Text>
      </TouchableOpacity>
    </View>
  ) : null;
}

export default WinOverlay;
