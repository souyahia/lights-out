import * as SecureStore from 'expo-secure-store';

const secureStoreKeys = {
  currentScore: 'user.current.score',
};

export async function getCurrentScore(): Promise<number> {
  const currentScoreValue = await getValueFor(secureStoreKeys.currentScore);
  return currentScoreValue ? Number(currentScoreValue) : 0;
}

export async function incrementScore(): Promise<void> {
  const currentScore = await getCurrentScore();
  return save(secureStoreKeys.currentScore, `${currentScore + 1}`);
}

async function save(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string): Promise<string | null> {
  return await SecureStore.getItemAsync(key);
}
