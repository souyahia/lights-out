import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { createNewGrid, toggleGridCell } from '../game/game';

interface GameState {
  grid: boolean[];
  initialGrid: boolean[];
  isWon: boolean;
  score: number | null;
}

const initialGrid = createNewGrid();

const initialState: GameState = {
  grid: [...initialGrid],
  initialGrid,
  isWon: false,
  score: null,
};

const gameSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    toggleCell: (state: Draft<GameState>, action: PayloadAction<number>) => {
      toggleGridCell(state.grid, action.payload);
      
      if (state.grid.every(isOn => !isOn)) {
        state.isWon = true;
      }
    },
    goToNextLevel: (state: Draft<GameState>) => {
      state.initialGrid = createNewGrid();
      state.grid = [...state.initialGrid];
      state.isWon = false;
    },
    resetLevel: (state: Draft<GameState>) => {
      state.grid = [...state.initialGrid];
    },
    setScore: (state: Draft<GameState>, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
  },
});

export const { toggleCell, goToNextLevel, resetLevel, setScore } = gameSlice.actions;

export default gameSlice.reducer;
