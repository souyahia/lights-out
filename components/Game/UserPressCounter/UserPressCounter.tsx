import React, { FC } from 'react';
import { Image, Text, View } from 'react-native';
import globalStyles from '../../../globalStyles';
import { useAppSelector } from '../../../store';
import styles from './styles';

const UserPressCounter: FC = () => {
  const { userPressCount, minimalNumberOfPresses } = useAppSelector((state) => ({
    userPressCount: state.game.userPressCount,
    minimalNumberOfPresses: state.game.minimalNumberOfPresses,
  }));
  const isTargetMissed = userPressCount > minimalNumberOfPresses;

  return (
    <View style={styles.container}>
      <View style={globalStyles.statContainer}>
        <Image style={globalStyles.statIcon} source={require('../../../assets/target.png')} />
        <Text style={[globalStyles.statText, isTargetMissed ? styles.targetMissed : styles.targetInRange]}>
          {`${userPressCount}/${minimalNumberOfPresses}`}
        </Text>
      </View>
    </View>
  );
}

export default UserPressCounter;
