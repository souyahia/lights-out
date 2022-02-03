import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '.';
import { setScore } from './GameState';
import { getCurrentScore, incrementScore } from './secureStore';

const updateScore: Middleware<{}, RootState> = (store) => (next) => async (action) => {
  next(action);
  if (action.type === 'grid/toggleCell' && store.getState().game.isWon) {
    await incrementScore();
    store.dispatch(setScore(await getCurrentScore()));
  }
}

const middlewares: ReadonlyArray<Middleware<{}, RootState>> = [ updateScore ];

export default middlewares;