import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../../navigation/stack';
import styles from './styles';

export type LevelsHeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Levels'>;
}

const LevelsHeader: FC<LevelsHeaderProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Levels</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Game')}>
        <Image style={styles.backButtonIcon} source={require('../../../assets/back.png')} />
      </TouchableOpacity>
    </View>
  );
}

export default LevelsHeader;
