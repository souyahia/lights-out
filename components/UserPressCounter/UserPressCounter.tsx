import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { getMinimalNumberOfPresses } from '../../game/game';
import globalStyles from '../../globalStyles';
import { useAppSelector } from '../../store';
import styles from './styles';

const UserPressCounter: FC = () => {
  const { userPressCount, solution } = useAppSelector((state) => ({
    userPressCount: state.game.userPressCount,
    solution: state.game.solution,
  }));
  const target = getMinimalNumberOfPresses(solution);
  const isTargetMissed = userPressCount > target;

  return (
    <View style={styles.container}>
      <View style={globalStyles.statContainer}>
        <Image style={globalStyles.statIcon} source={require('../../assets/target.png')} />
        <Text style={[globalStyles.statText, isTargetMissed ? styles.targetMissed : styles.targetInRange]}>
          {`${userPressCount}/${target}`}
        </Text>
      </View>
    </View>
  );
}

export default UserPressCounter;
