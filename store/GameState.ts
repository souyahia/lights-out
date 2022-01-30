import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { createNewGrid, toggleGridCell } from '../game/game';

interface GameState {
  grid: boolean[];
}

const initialState: GameState = {
  grid: createNewGrid(),
};

const gameSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    toggleCell: (state: Draft<GameState>, action: PayloadAction<number>) => {
      toggleGridCell(state.grid, action.payload);
    },
  },
});

export const { toggleCell } = gameSlice.actions;

export default gameSlice.reducer;
