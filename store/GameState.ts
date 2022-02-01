import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { createNewGrid, toggleGridCell } from '../game/game';

interface GameState {
  grid: boolean[];
  initialGrid: boolean[];
  isWon: boolean;
}

const initialGrid = createNewGrid();

const initialState: GameState = {
  grid: [...initialGrid],
  initialGrid,
  isWon: false,
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
  },
});

export const { toggleCell, goToNextLevel, resetLevel } = gameSlice.actions;

export default gameSlice.reducer;
