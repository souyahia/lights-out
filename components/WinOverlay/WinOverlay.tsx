import React from 'react';
import { Image, View } from 'react-native';
import { useAppSelector } from '../../store';
import styles from './styles';

const WinOverlay = () => {
  const isWon = useAppSelector((state) => state.game.isWon);

  return isWon ? (
    <View style={[styles.overlay]}>
      <Image style={styles.sprite} source={require('../../assets/win.png')} />
    </View>
  ) : null;
}

export default WinOverlay;
