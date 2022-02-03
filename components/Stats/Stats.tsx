import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { useAppSelector } from '../../store';
import styles from './styles';

const Stats: FC = () => {
  const { score, skipTokens, consecutiveWins } = useAppSelector((state) => ({
    score: state.game.score ?? 0,
    skipTokens: state.game.skipTokens ?? 0,
    consecutiveWins: state.game.consecutiveWins ?? 0,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <View style={styles.statContainer}>
          <Image style={styles.statIcon} source={require('../../assets/trophy.png')} />
          <Text style={styles.statText}>{score}</Text>
        </View>
        {consecutiveWins === 0 ? <></> :
          <View style={[styles.statContainer, styles.consecutiveWinsContainer]}>
            <Image style={styles.statIcon} source={require('../../assets/fire.png')} />
            <Text style={styles.statText}>{consecutiveWins}</Text>
          </View>}
      </View>
      <View style={styles.statContainer}>
        <Image style={styles.statIcon} source={require('../../assets/coin.png')} />
        <Text style={styles.statText}>{skipTokens}</Text>
      </View>
    </View>
  );
}

export default Stats;
