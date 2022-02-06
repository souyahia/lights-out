export interface Level {
  id: number;
  grid: boolean[];
  minimalNumberOfPresses: number;
  completed: boolean;
  userBestScore?: number;
}