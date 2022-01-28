import { AnyAction, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { GameGrid } from '../game/game';

interface GameState {
  grid: GameGrid;
}

const initialState: GameState = {
  grid: new GameGrid(),
};

const gameSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    toggleCell: (state: Draft<GameState>, action: PayloadAction<number>) => {
      // TODO
    },
  },
});
export const { toggleCell } = gameSlice.actions;

// The cast is needed here because apparently, my IDE can not infer the types for this default export.
// If someone knows whats wrong (bad typescript syntax or IDE error ?) I'd like to know :)
export default gameSlice.reducer as ((state: (GameState | undefined), action: AnyAction) => GameState);
