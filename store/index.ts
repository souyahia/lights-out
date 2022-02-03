import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import gameReducer, { setScore } from './GameState';
import middlewares from './middleware';
import { getCurrentScore } from './secureStore';

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
  store.dispatch(setScore(score));
}

export default store;
