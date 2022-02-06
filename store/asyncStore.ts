import AsyncStorage from '@react-native-async-storage/async-storage';
import { Level } from '../game/level';

const asyncStoreKeys = {
  levels: 'game.levels',
  currentLevelId: 'game.currentLevelId',
};

export async function getLevels(): Promise<Level[]> {
  const levelsValue = await getValueFor(asyncStoreKeys.levels);
  return levelsValue ? JSON.parse(levelsValue) as Level[] : [];
}

export async function saveLevels(levels: Level[]): Promise<void> {
  await save(asyncStoreKeys.levels, JSON.stringify(levels));
}

export async function getCurrentLevelId(): Promise<number> {
  const currentLevelIdValue = await getValueFor(asyncStoreKeys.currentLevelId);
  return currentLevelIdValue ? Number(currentLevelIdValue) : 0;
}

export async function saveCurrentLevelId(currentLevelId: number): Promise<void> {
  await save(asyncStoreKeys.currentLevelId, `${currentLevelId}`);
}

async function save(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value);
}

async function getValueFor(key: string): Promise<string | null> {
  return await AsyncStorage.getItem(key);
}
