import * as SecureStore from 'expo-secure-store';

const secureStoreKeys = {
  currentScore: 'user.currentScore',
  skipTokens: 'user.skipTokens',
  consecutiveWins: 'user.consecutiveWins',
};

export async function getCurrentScore(): Promise<number> {
  const currentScoreValue = await getValueFor(secureStoreKeys.currentScore);
  return currentScoreValue ? Number(currentScoreValue) : 0;
}

export async function incrementScore(): Promise<void> {
  const currentScore = await getCurrentScore();
  return save(secureStoreKeys.currentScore, `${currentScore + 1}`);
}

export async function getSkipTokens(): Promise<number> {
  const skipTokensValue = await getValueFor(secureStoreKeys.skipTokens);
  return skipTokensValue ? Number(skipTokensValue) : 0;
}

export async function addOneSkipToken(): Promise<void> {
  const skipTokens = await getSkipTokens();
  return save(secureStoreKeys.skipTokens, `${skipTokens + 1}`);
}

export async function removeOneSkipToken(): Promise<void> {
  const skipTokens = await getSkipTokens();
  return skipTokens > 0
    ? save(secureStoreKeys.skipTokens, `${skipTokens - 1}`)
    : Promise.resolve();
}

export async function getConsecutiveWins(): Promise<number> {
  const consecutiveWins = await getValueFor(secureStoreKeys.consecutiveWins);
  return consecutiveWins ? Number(consecutiveWins) : 0;
}

export async function incrementConsecutiveWins(): Promise<void> {
  const consecutiveWins = await getConsecutiveWins();
  return save(secureStoreKeys.consecutiveWins, `${consecutiveWins + 1}`);
}

export async function resetConsecutiveWins(): Promise<void> {
  return save(secureStoreKeys.consecutiveWins, '0');
}

async function save(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string): Promise<string | null> {
  return await SecureStore.getItemAsync(key);
}
