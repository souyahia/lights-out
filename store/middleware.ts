import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '.';
import { setConsecutiveWins, setScore, setSkipTokens } from './GameState';
import { addOneSkipToken, incrementConsecutiveWins, incrementScore, removeOneSkipToken, resetConsecutiveWins } from './secureStore';

const updateScore: Middleware<{}, RootState> = (store) => (next) => async (action) => {
  next(action);
  if (action.type === 'game/toggleCell' && store.getState().game.isWon) {
    await incrementScore();
    const newScore = (store.getState().game.score ?? 0) + 1;
    store.dispatch(setScore(newScore));
  }
}

const updateConsecutiveWins: Middleware<{}, RootState> = (store) => (next) => async (action) => {
  next(action);
  if (action.type === 'game/toggleCell' && store.getState().game.isWon) {
    await incrementConsecutiveWins();
    let consecutiveWins = (store.getState().game.consecutiveWins ?? 0) + 1;
    if (consecutiveWins % 5 === 0) {
      await addOneSkipToken();
      const newSkipTokens = (store.getState().game.skipTokens ?? 0) + 1;
      store.dispatch(setSkipTokens(newSkipTokens));
    }
    store.dispatch(setConsecutiveWins(consecutiveWins));
  }
}

const consumeSkipToken: Middleware<{}, RootState> = (store) => (next) => async (action) => {
  if (action.type === 'game/skipLevel') {
    const skipTokensCount = store.getState().game.skipTokens;
    if (skipTokensCount && skipTokensCount > 0) {
      await removeOneSkipToken();
      await resetConsecutiveWins();
      next(action);
    }
    return;
  }
  next(action);
}

const middlewares: ReadonlyArray<Middleware<{}, RootState>> = [
  updateScore,
  updateConsecutiveWins,
  consumeSkipToken,
];

export default middlewares;