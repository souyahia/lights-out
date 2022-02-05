import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import globalStyles from '../../globalStyles';
import { useAppSelector } from '../../store';
import styles from './styles';

const Stats: FC = () => {
  const {
    score,
    skipTokens,
    consecutiveWins,
    userPressCount,
  } = useAppSelector((state) => ({
    score: state.game.score ?? 0,
    skipTokens: state.game.skipTokens ?? 0,
    consecutiveWins: state.game.consecutiveWins ?? 0,
    userPressCount: state.game.userPressCount,
  }));

  return (
    <View style={styles.container}>
      <View style={globalStyles.statContainer}>
        <View style={globalStyles.statContainer}>
          <Image style={globalStyles.statIcon} source={require('../../assets/trophy.png')} />
          <Text style={globalStyles.statText}>{score}</Text>
        </View>
        <View style={[
          styles.consecutiveWins,
          globalStyles.statContainer,
          consecutiveWins === 0 ? styles.hidden : {},
        ]}>
          <Image style={globalStyles.statIcon} source={require('../../assets/fire.png')} />
          <Text style={globalStyles.statText}>{consecutiveWins}</Text>
        </View>
      </View>
      <View style={globalStyles.statContainer}>
        <Image style={globalStyles.statIcon} source={require('../../assets/coin.png')} />
        <Text style={globalStyles.statText}>{skipTokens}</Text>
      </View>
    </View>
  );
}

export default Stats;
