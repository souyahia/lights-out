import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '.';
import { saveCurrentLevelId, saveLevels } from './asyncStore';
import { goToLevel, setConsecutiveWins, setScore, setSkipTokens, skipToLevel, toggleCell } from './GameState';
import { completeLevel, createNewLevel, selectLevel, skipToNewLevel } from './LevelsState';
import { addOneSkipToken, incrementConsecutiveWins, incrementScore, removeOneSkipToken, resetConsecutiveWins } from './secureStore';

const updateScore: Middleware<{}, RootState> = (store) => (next) => async (action) => {
  next(action);
  if (toggleCell.match(action) && store.getState().game.isWon) {
    await incrementScore();
    const newScore = (store.getState().game.score ?? 0) + 1;
    store.dispatch(setScore(newScore));
  }
}

const updateConsecutiveWins: Middleware<{}, RootState> = (store) => (next) => async (action) => {
  next(action);
  const levels = store.getState().levels.levels;
  const isLastLevel = levels !== null && store.getState().levels.currentLevelId === levels.length - 1;
  if (toggleCell.match(action) && store.getState().game.isWon && isLastLevel) {
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

const updateLevelCompletion: Middleware<{}, RootState> = (store) => (next) => (action) => {
  next(action);
  if (toggleCell.match(action) && store.getState().game.isWon) {
    store.dispatch(completeLevel(store.getState().game.userPressCount));
  }
}

const consumeSkipToken: Middleware<{}, RootState> = (store) => (next) => async (action) => {
  if (skipToLevel.match(action)) {
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

const goToLevelAfterUpdatingCurrentLevel: Middleware<{}, RootState> = (store) => (next) => (action) => {
  next(action);
  if (createNewLevel.match(action) || selectLevel.match(action)) {
    const currentLevels = store.getState().levels.levels ?? [];
    const currentLevelId = store.getState().levels.currentLevelId ?? 0;

    store.dispatch(goToLevel(currentLevels[currentLevelId]));
  }
}

const storeNewLevel: Middleware<{}, RootState> = (store) => (next) => async (action) => {
  next(action);
  if (createNewLevel.match(action)) {
    const levels = store.getState().levels.levels ?? [];
    const currentLevelId = store.getState().levels.currentLevelId ?? 0;

    await saveLevels(levels);
    await saveCurrentLevelId(currentLevelId);
  }
}

const applySkip: Middleware<{}, RootState> = (store) => (next) => (action) => {
  next(action);
  if (skipToNewLevel.match(action)) {
    const levels = store.getState().levels.levels ?? [];
    const currentLevelId = store.getState().levels.currentLevelId ?? 0;

    store.dispatch(skipToLevel(levels[currentLevelId]));
  }
}

const middlewares: ReadonlyArray<Middleware<{}, RootState>> = [
  updateScore,
  updateConsecutiveWins,
  updateLevelCompletion,
  consumeSkipToken,
  goToLevelAfterUpdatingCurrentLevel,
  storeNewLevel,
  applySkip,
];

export default middlewares;