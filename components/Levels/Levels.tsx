import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FC } from 'react';
import { View } from 'react-native';
import { RootStackParamList } from '../../navigation/stack';
import LevelsHeader from './LevelsHeader';
import LevelsList from './LevelsList';
import styles from './styles';

export type LevelsProps = NativeStackScreenProps<RootStackParamList, 'Levels'>;

const Levels: FC<LevelsProps> = ({ navigation }) => {
  return (
    <View style={styles.backgroundColor}>
      <LevelsHeader navigation={navigation} />
      <LevelsList navigation={navigation} />
    </View>
  );
}

export default Levels;
