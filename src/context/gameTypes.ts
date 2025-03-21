/**
 * Data representing state of a single square
 *
 * - `available` (boolean): shows if a square can be reached from where the knight currently stands
 * - `id` (number): square's unique id
 * - `col` (number): square's column - indexing starts at 1
 * - `row` (number): square's row - indexing starts at 1
 * - `closed` (boolean): shows if the square has been already visited and is currently closed
 */
export interface SquareData {
	available: boolean;
	id: number;
	col: number;
	row: number;
	closed: boolean;
}

export enum GameStatus {
	WON = "won",
	LOST = "lost",
	IN_PROGRESS = "inProgress",
	NO_GAME = "noGame",
}

/**
 * Statistics from all played games
 *
 * - `gamesWon` (number): number of games won
 * - `gamesLost` (number): number of games lost
 * - `openTour` (boolean): whether player has completed an open tour
 * - `closedTour` (boolean): whether player has completed a closed tour
 * - `win3` (boolean): whether player has won three games or more
 * - `lose5` (boolean): whether player has lost five games or more
 * - `quickestLose` (boolean): whether player has lost in fewest steps possible
 */
export interface StatisticsData {
	gamesWon: number;
	gamesLost: number;
	openTour: boolean;
	closedTour: boolean;
	win3: boolean;
	lose5: boolean;
	quickestLose: boolean;
}

/**
 * Data indicating which cheats are currently enabled
 * - `unlimitedBacksteps` (boolean)
 * - `dragDrop` (boolean)
 * - `prize` (boolean)
 * - `backsteps` (boolean)
 * - `confetti` (boolean)
 *
 */
export interface CheatsData {
	unlimitedBacksteps: boolean;
	dragDrop: boolean;
	prize: boolean;
	backsteps: boolean;
	confetti: boolean;
}

export interface GameState {
	board: SquareData[];
	currentSquare: SquareData | null;
	gameStatus: GameStatus;
	history: number[];
	counter: number;
	gameStatistics: StatisticsData;
	activeCheats: CheatsData;
	easyMode: boolean;
}
