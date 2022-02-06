import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../navigation/stack';
import GameControls from './GameControls';
import Grid from './Grid';
import Stats from './Stats';
import styles from './styles';
import UserPressCounter from './UserPressCounter';
import WinOverlay from './WinOverlay';

export type GameProps = NativeStackScreenProps<RootStackParamList, 'Game'>;

const Game: FC<GameProps> = ({ navigation }) => {
  const background = require('../../assets/background.png');
  const logo = require('../../assets/logo.png');
  
  return (
    <>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
      <TouchableOpacity style={styles.levels} onPress={() => navigation.navigate('Levels')}>
        <Image style={styles.levelsIcon} source={require('../../assets/levels.png')} />
      </TouchableOpacity>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
          <Stats />
          <Grid />
          <UserPressCounter />
          <GameControls />
        </View>
      </ImageBackground>
      <WinOverlay />
    </>
  );
}

export default Game;
