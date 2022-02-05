export function toggleGridCell(grid: boolean[], index: number): void {
  if (isIndexInBounds(index)) {
    [ index, ...getNeighborIndexes(index) ].forEach(cellIndex => grid[cellIndex] = !grid[cellIndex]);
  }
}

export function createNewGrid(): boolean[] {
  const grid = new Array(25).fill(false);
  for (let i = 0; i < 25; i++) {
    if (Math.random() < 0.5) {
      toggleGridCell(grid, i);
    }
  }
  return grid;
}

export function findSolution(grid: boolean[]): boolean[] {
  const { flippingMatrix, resultingGrid } = cascadeFlip(grid);
  const resultingLastRow = resultingGrid.slice(20, 25);

  if (resultingLastRow.every(cell => !cell)) {
    return flippingMatrix;
  }

  const updatedGrid = [...resultingGrid];
  
  getFirstRowPressSolution(resultingLastRow).forEach((value, index) => {
    if (value) {
      toggleGridCell(updatedGrid, index);
      flippingMatrix[index] = !flippingMatrix[index];
    }
  });

  return cascadeFlip(updatedGrid, flippingMatrix).flippingMatrix;
}

export function getMinimalNumberOfPresses(solution: boolean[]): number {
  return solution.reduce((prev, curr) => curr ? prev + 1 : prev, 0);
}

function getNeighborIndexes(index: number): number[] {
  return [
    index - 5,
    index - 1,
    index + 1,
    index + 5,
  ].filter(neighborIndex => isIndexInBounds(neighborIndex) && (
    isSameRow(index, neighborIndex) || isSameColumn(index, neighborIndex)
  ));
}

function isIndexInBounds(index: number): boolean {
  return index >= 0 && index < 25;
}

function isSameRow(index1: number, index2: number): boolean {
  return Math.floor(index1 / 5) === Math.floor(index2 / 5);
}

function isSameColumn(index1: number, index2: number): boolean {
  return index1 % 5 === index2 % 5;
}

function equals(grid1: boolean[], grid2: boolean[]): boolean {
  return grid1.every((value, index) => grid2[index] === value);
}

function cascadeFlip(gridToCascade: boolean[], flippingMatrix?: boolean[]): { flippingMatrix: boolean[], resultingGrid: boolean[] } {
  const resultingGrid = [...gridToCascade];
  const cellsFlipped = flippingMatrix ? [...flippingMatrix] : new Array(25).fill(false);

  for (let i = 5; i < 25; i++) {
    if (resultingGrid[i - 5]) {
      toggleGridCell(resultingGrid, i);
      cellsFlipped[i] = !cellsFlipped[i];
    }
  }

  return {
    flippingMatrix: cellsFlipped,
    resultingGrid,
  }
}

function getFirstRowPressSolution(lastRow: boolean[]): boolean[] {
  if (equals(lastRow, [true, true, true, false, false])) {
    return [false, true, false, false, false];
  }
  if (equals(lastRow, [true, true, false, true, true])) {
    return [false, false, true, false, false];
  }
  if (equals(lastRow, [true, false, true, true, false])) {
    return [false, false, false, false, true];
  }
  if (equals(lastRow, [true, false, false, false, true])) {
    return [true, true, false, false, false];
  }
  if (equals(lastRow, [false, true, true, false, true])) {
    return [true, false, false, false, false];
  }
  if (equals(lastRow, [false, true, false, true, false])) {
    return [true, false, false, true, false];
  }
  if (equals(lastRow, [false, false, true, true, true])) {
    return [false, false, false, true, false];
  }
  return [false, false, false, false, false];
}