import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { createNewGrid, toggleGridCell } from '../game/game';

interface GameState {
  grid: boolean[];
  isWon: boolean;
}

const initialState: GameState = {
  grid: createNewGrid(),
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
      state.grid = createNewGrid();
      state.isWon = false;
    }
  },
});

export const { toggleCell, goToNextLevel } = gameSlice.actions;

export default gameSlice.reducer;
