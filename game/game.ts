export class GameGrid {
  private _cells: boolean[] = GameGrid.createNewGrid();

  get cells(): boolean[] {
    return this._cells;
  }

  private static createNewGrid(): boolean[] {
    return new Array(25).fill(false);
  }
}
