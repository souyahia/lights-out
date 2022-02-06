import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { toggleGridCell } from '../game/game';
import { Level } from '../game/level';

interface GameState {
  grid: boolean[];
  initialGrid: boolean[];
  minimalNumberOfPresses: number;
  isWon: boolean;
  userPressCount: number;
  score: number | null;
  skipTokens: number | null;
  consecutiveWins: number | null;

  // Used for easier debugging
  // solution: boolean[];
}

const initialState: GameState = {
  grid: [],
  initialGrid: [],
  minimalNumberOfPresses: 0,
  isWon: false,
  userPressCount: 0,
  score: null,
  skipTokens: null,
  consecutiveWins: null,

  // Used for easier debugging
  // solution: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleCell: (state: Draft<GameState>, action: PayloadAction<number>) => {
      toggleGridCell(state.grid, action.payload);
      state.userPressCount++;
      
      if (state.grid.every(isOn => !isOn)) {
        state.isWon = true;
      }
    },
    goToLevel: (state: Draft<GameState>, action: PayloadAction<Level>) => {
      state.grid = action.payload.grid;
      state.initialGrid = action.payload.grid;
      state.minimalNumberOfPresses = action.payload.minimalNumberOfPresses;
      state.isWon = false;
      state.userPressCount = 0;

      // Used for easier debugging
      // state.solution = findBestSolution(state.grid);
    },
    skipToLevel: (state: Draft<GameState>, action: PayloadAction<Level>) => {
      if (state.skipTokens && state.skipTokens > 0) {
        state.initialGrid = action.payload.grid;
        state.grid = action.payload.grid;
        state.minimalNumberOfPresses = action.payload.minimalNumberOfPresses;
        state.isWon = false;
        state.skipTokens--;
        state.consecutiveWins = 0;
        state.userPressCount = 0;

        // Used for easier debugging
        // state.solution = findBestSolution(state.grid);
      }
    },
    resetLevel: (state: Draft<GameState>) => {
      state.grid = [...state.initialGrid];
      state.userPressCount = 0;
    },
    setScore: (state: Draft<GameState>, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setSkipTokens: (state: Draft<GameState>, action: PayloadAction<number>) => {
      state.skipTokens = action.payload;
    },
    setConsecutiveWins: (state: Draft<GameState>, action: PayloadAction<number>) => {
      state.consecutiveWins = action.payload;
    },
  },
});

export const {
  toggleCell,
  goToLevel,
  skipToLevel,
  resetLevel,
  setScore,
  setSkipTokens,
  setConsecutiveWins,
} = gameSlice.actions;

export default gameSlice.reducer;
