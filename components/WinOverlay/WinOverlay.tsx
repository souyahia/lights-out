import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store';
import { nextLevel } from '../../store/GameState';
import styles from './styles';
import globalStyles from '../../globalStyles';

const WinOverlay: FC = () => {
  const { isWon, consecutiveWins } = useAppSelector((state) => ({
    isWon: state.game.isWon,
    consecutiveWins: state.game.consecutiveWins ?? 0,
  }));
  const dispatch = useAppDispatch();
  const displayedSprite = consecutiveWins % 50 === 0
    ? require('../../assets/50-in-a-row.png')
    : require('../../assets/win.png');
  const hasSomeSkipTokensBeenEarned = consecutiveWins % 5 === 0;

  return isWon ? (
    <View style={styles.overlay}>
      <Image style={styles.sprite} source={displayedSprite} />
      {!hasSomeSkipTokensBeenEarned ? <></> :
        <View style={styles.skipTokenEarning}>
          <Text style={styles.skipTokenEarningText}>5 wins in a row ! (</Text>
          <Image style={styles.skipTokenEarningIcon} source={require('../../assets/coin.png')} />
          <Text style={styles.skipTokenEarningText}>+1)</Text>
        </View>}
      <TouchableOpacity style={globalStyles.primaryButton} onPress={() => dispatch(nextLevel())}>
        <Text style={globalStyles.primaryButtonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  ) : null;
}

export default WinOverlay;
