import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store';
import { nextLevel } from '../../store/GameState';
import styles from './styles';
import globalStyles from '../../globalStyles';
import { getMinimalNumberOfPresses } from '../../game/game';

const WinOverlay: FC = () => {
  const {
    isWon,
    consecutiveWins,
    solution,
    userPressCount,
  } = useAppSelector((state) => ({
    isWon: state.game.isWon,
    consecutiveWins: state.game.consecutiveWins ?? 0,
    solution: state.game.solution,
    userPressCount: state.game.userPressCount,
  }));
  const dispatch = useAppDispatch();
  const displayedSprite = consecutiveWins % 50 === 0
    ? require('../../assets/50-in-a-row.png')
    : require('../../assets/win.png');
  const hasSomeSkipTokensBeenEarned = consecutiveWins % 5 === 0;
  const isPerfectScore = userPressCount === getMinimalNumberOfPresses(solution);

  return isWon ? (
    <View style={styles.overlay}>
      <Image style={styles.sprite} source={displayedSprite} />
      {!hasSomeSkipTokensBeenEarned ? <></> :
        <View style={styles.additionalMessage}>
          <Text style={styles.additionalMessageText}>5 wins in a row ! (</Text>
          <Image style={styles.skipTokenEarningIcon} source={require('../../assets/coin.png')} />
          <Text style={styles.additionalMessageText}>+1)</Text>
        </View>}
      {!isPerfectScore ? <></> :
      <View style={styles.additionalMessage}>
        <Text style={styles.additionalMessageText}>Perfect score !</Text>
      </View>}
      <TouchableOpacity style={globalStyles.primaryButton} onPress={() => dispatch(nextLevel())}>
        <Text style={globalStyles.primaryButtonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  ) : null;
}

export default WinOverlay;
