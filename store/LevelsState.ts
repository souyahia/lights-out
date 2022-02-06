import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { createNewGrid, findBestSolution, getMinimalNumberOfPresses } from '../game/game';
import { Level } from '../game/level';

interface LevelsState {
  levels: Level[] | null;
  currentLevelId: number | null;
}

const initialState: LevelsState = {
  levels: null,
  currentLevelId: null,
};

const createAndApplyNewLevel = (state: Draft<LevelsState>) => {
  if (!state.levels) {
    state.levels = [];
  }
  const id = state.levels.length;
  const grid = createNewGrid();
  const minimalNumberOfPresses = getMinimalNumberOfPresses(findBestSolution(grid));

  const newLevel: Level = {
    id,
    grid,
    minimalNumberOfPresses,
    completed: false,
  };

  state.levels.push(newLevel);
  state.currentLevelId = newLevel.id;
};

const levelsSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {
    createNewLevel: createAndApplyNewLevel,
    skipToNewLevel: createAndApplyNewLevel,
    completeLevel: (state: Draft<LevelsState>, action: PayloadAction<number>) => {
      if (!state.levels || state.currentLevelId === null) {
        return;
      }
      state.levels[state.currentLevelId].completed = true;
      const currentBestScore = state.levels[state.currentLevelId].userBestScore;
      if (!currentBestScore || currentBestScore > action.payload) {
        state.levels[state.currentLevelId].userBestScore = action.payload;
      }
    },
    selectLevel: (state: Draft<LevelsState>, action: PayloadAction<number>) => {
      if (!state.levels || !state.levels[action.payload]) {
        return;
      }
      state.currentLevelId = action.payload;
    },
    setLevels: (state: Draft<LevelsState>, action: PayloadAction<Level[]>) => {
      state.levels = action.payload;
    },
    setCurrentLevelId: (state: Draft<LevelsState>, action: PayloadAction<number>) => {
      state.currentLevelId = action.payload;
    },
  },
});

export const {
  createNewLevel,
  skipToNewLevel,
  completeLevel,
  selectLevel,
  setLevels,
  setCurrentLevelId,
} = levelsSlice.actions;

export default levelsSlice.reducer;
