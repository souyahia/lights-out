import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { createNewGrid, findSolution, toggleGridCell } from '../game/game';

interface GameState {
  grid: boolean[];
  initialGrid: boolean[];
  solution: boolean[];
  isWon: boolean;
  userPressCount: number;
  score: number | null;
  skipTokens: number | null;
  consecutiveWins: number | null;
}

const initialGrid = createNewGrid();

const initialState: GameState = {
  grid: [...initialGrid],
  initialGrid,
  solution: findSolution(initialGrid),
  isWon: false,
  userPressCount: 0,
  score: null,
  skipTokens: null,
  consecutiveWins: null,
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
    nextLevel: (state: Draft<GameState>) => {
      if (state.isWon = true) {
        state.initialGrid = createNewGrid();
        state.grid = [...state.initialGrid];
        state.solution = findSolution(state.initialGrid);
        state.isWon = false;
        state.userPressCount = 0;
      }
    },
    skipLevel: (state: Draft<GameState>) => {
      if (state.skipTokens && state.skipTokens > 0) {
        state.initialGrid = createNewGrid();
        state.grid = [...state.initialGrid];
        state.solution = findSolution(state.initialGrid);
        state.isWon = false;
        state.skipTokens--;
        state.consecutiveWins = 0;
        state.userPressCount = 0;
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
  nextLevel,
  skipLevel,
  resetLevel,
  setScore,
  setSkipTokens,
  setConsecutiveWins,
} = gameSlice.actions;

export default gameSlice.reducer;
