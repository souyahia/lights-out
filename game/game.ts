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
