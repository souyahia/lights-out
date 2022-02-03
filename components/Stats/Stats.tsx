import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { useAppSelector } from '../../store';
import styles from './styles';

const Stats: FC = () => {
  const score = useAppSelector((state) => state.game.score);

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Image style={styles.scoreIcon} source={require('../../assets/trophy.png')} />
        <Text style={styles.scoreText}>{score}</Text>
      </View>
    </View>
  );
}

export default Stats;
