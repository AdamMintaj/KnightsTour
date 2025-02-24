import { SquareData, StatisticsData } from "context/gameTypes";

/**
 * Generates and returns an empty 8x8 board
 * @returns a board array with 64 squares
 */
export function getNewBoard() {
	const board: SquareData[] = [];
	for (let i = 0; i < 64; i++) {
		board.push({
			available: true,
			id: i,
			col: (i % 8) + 1,
			row: Math.floor(i / 8) + 1,
			closed: false,
		});
	}
	return board;
}

/**
 * Updates the state of a given board, by closing and optionally opening squares with given ids
 * @param board board to update
 * @param squaresToClose array with IDs of squares to close
 * @param squaresToOpen optional, array of IDs of squares to open
 * @returns updated board array
 */
export function getUpdatedBoard(
	board: SquareData[],
	squaresToClose: number[],
	squaresToOpen?: number[]
) {
	const updatedBoard = board.map((square) => {
		if (squaresToClose.includes(square.id))
			return { ...square, closed: true };
		else if (squaresToOpen && squaresToOpen.includes(square.id))
			return { ...square, closed: false };
		else return square;
	});

	return updatedBoard;
}

/**
 * Returns true if going to a given square from a given position is a valid move for a knight
 * @param destination destination of movement
 * @param origin origin of movement
 * @returns boolean
 */
export function checkIfValidMove(destination: SquareData, origin: SquareData) {
	// The knight's move consists of one square move, either horizontally or vertically,
	// two squares move in the other direction.
	// So any move where one offset value is equal to 1 and the other to 2 will be a valid move.
	const columnOffset = Math.abs(origin.col - destination.col);
	const rowOffset = Math.abs(origin.row - destination.row);

	const isMoveValid =
		(columnOffset === 1 && rowOffset === 2) ||
		(columnOffset === 2 && rowOffset === 1);

	return isMoveValid;
}

/**
 * Returns an object with game statistics stored in local storage.
 * If there are no stats in local storage the function returns a new stats object.
 * @returns GameStatistics object
 */
export function getStatistics(): StatisticsData {
	const storedStats = localStorage.getItem("stats");

	if (storedStats != null) return JSON.parse(storedStats);
	else
		return {
			gamesWon: 0,
			gamesLost: 0,
			openTour: false,
			closedTour: false,
			win3: false,
			lose5: false,
			quickestLose: false,
		};
}
