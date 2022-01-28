export class GameGrid {
  private _cells: boolean[] = GameGrid.createNewGrid();

  get cells(): boolean[] {
    return this._cells;
  }

  private static createNewGrid(): boolean[] {
    const grid = [];
    for (let i = 0; i < 25; i++) {
      grid.push(Math.random() < 0.5);
    }
    return grid;
  }
}
