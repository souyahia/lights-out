import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../store';
import { resetLevel } from '../../../store/GameState';
import styles from './styles';
import globalStyles from '../../../globalStyles';
import { skipToNewLevel } from '../../../store/LevelsState';

const GameControls: FC = () => {
  const { isSkipAvailable, skipTokens } = useAppSelector((state) => ({
    isSkipAvailable: state.levels.levels && state.levels.currentLevelId === state.levels.levels.length - 1,
    skipTokens: state.game.skipTokens ?? 0,
  }));
  const dispatch = useAppDispatch();

  const isSkipDisabled = skipTokens < 1;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={globalStyles.primaryButton} onPress={() => dispatch(resetLevel())}>
        <Text style={globalStyles.primaryButtonText}>Reset</Text>
      </TouchableOpacity>
      {!isSkipAvailable ? <></> :
        <TouchableOpacity style={[
            styles.skipButton,
            globalStyles.primaryButton,
            isSkipDisabled ? globalStyles.primaryButtonDisabled : {},
          ]}
          onPress={() => dispatch(skipToNewLevel())}
          disabled={isSkipDisabled}>
          <Text style={globalStyles.primaryButtonText}>Skip (</Text>
            <Image style={styles.skipTokensIcon} source={require('../../../assets/coin.png')} />
          <Text style={globalStyles.primaryButtonText}>x1)</Text>
        </TouchableOpacity>}
    </View>
  );
}

export default GameControls;
