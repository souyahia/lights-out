import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store';
import { goToNextLevel } from '../../store/GameState';
import styles from './styles';
import globalStyles from '../../globalStyles';

const WinOverlay: FC = () => {
  const isWon = useAppSelector((state) => state.game.isWon);
  const dispatch = useAppDispatch();

  return isWon ? (
    <View style={[styles.overlay]}>
      <Image style={styles.sprite} source={require('../../assets/win.png')} />
      <TouchableOpacity style={globalStyles.primaryButton} onPress={() => dispatch(goToNextLevel())}>
        <Text style={globalStyles.primaryButtonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  ) : null;
}

export default WinOverlay;
