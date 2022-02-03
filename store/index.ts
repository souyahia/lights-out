import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import gameReducer, { setConsecutiveWins, setScore, setSkipTokens } from './GameState';
import middlewares from './middleware';
import { getConsecutiveWins, getCurrentScore, getSkipTokens } from './secureStore';

const rootReducer = combineReducers({
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export async function initStoreFromSecureStore(): Promise<void> {
  const score = await getCurrentScore();
  const skipTokens = await getSkipTokens();
  const consecutiveWins = await getConsecutiveWins();

  store.dispatch(setScore(score));
  store.dispatch(setSkipTokens(skipTokens));
  store.dispatch(setConsecutiveWins(consecutiveWins));
}

export default store;
