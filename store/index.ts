import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { getCurrentLevelId, getLevels } from './asyncStore';
import gameReducer, { goToLevel, setConsecutiveWins, setScore, setSkipTokens } from './GameState';
import levelsReducer, { createNewLevel, setCurrentLevelId, setLevels } from './LevelsState';
import middlewares from './middleware';
import { getConsecutiveWins, getCurrentScore, getSkipTokens } from './secureStore';

const rootReducer = combineReducers({
  game: gameReducer,
  levels: levelsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export async function initStore(): Promise<void> {
  // Used for clearing data in DEV MODE ONLY (just for debugging)
  // await SecureStore.deleteItemAsync('user.currentScore');
  // await SecureStore.deleteItemAsync('user.skipTokens');
  // await SecureStore.deleteItemAsync('user.consecutiveWins');
  // await AsyncStorage.clear();

  await initStoreFromSecureStore();
  await initStoreFromAsyncStore();
}

async function initStoreFromSecureStore(): Promise<void> {
  const score = await getCurrentScore();
  const skipTokens = await getSkipTokens();
  const consecutiveWins = await getConsecutiveWins();

  store.dispatch(setScore(score));
  store.dispatch(setSkipTokens(skipTokens));
  store.dispatch(setConsecutiveWins(consecutiveWins));
}

async function initStoreFromAsyncStore(): Promise<void> {
  const levels = await getLevels();
  
  if (levels.length === 0) {
    store.dispatch(createNewLevel());
  } else {
    const currentLevelId = await getCurrentLevelId();

    store.dispatch(setLevels(levels));
    store.dispatch(setCurrentLevelId(currentLevelId));
  }

  const currentLevels = store.getState().levels.levels ?? [];
  const currentLevelId = store.getState().levels.currentLevelId ?? 0;
  store.dispatch(goToLevel(currentLevels[currentLevelId]));
}

export default store;
