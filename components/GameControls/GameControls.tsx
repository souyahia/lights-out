import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch } from '../../store';
import { goToNextLevel, resetLevel } from '../../store/GameState';
import styles from './styles';
import globalStyles from '../../globalStyles';

const GameControls: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={globalStyles.primaryButton} onPress={() => dispatch(resetLevel())}>
        <Text style={globalStyles.primaryButtonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.primaryButton} onPress={() => dispatch(goToNextLevel())}>
        <Text style={globalStyles.primaryButtonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GameControls;
