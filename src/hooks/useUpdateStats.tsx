import { useEffect } from "react";
import useGameContext from "context/GameContext";
import { checkIfValidMove } from "../utils/helpers";
import { ActionType } from "context/gameReducer";
import { GameStatus } from "context/gameTypes";

/**
 * Updates the game statistics in GameContext and local storage whenever a game ends.
 */
export const useUpdateStats = () => {

  const [{ gameStatus, gameStatistics, board, history, counter }, dispatch] = useGameContext();

  useEffect(() => {
    if (gameStatus === GameStatus.WON) {
      const updatedStats = {
        ...gameStatistics,
        /* update the count of games won */
        gamesWon: gameStatistics.gamesWon + 1,
        /* check if the tour was open - initial square can't be reached from the final square */
        openTour: gameStatistics.openTour
          ? true
          : !checkIfValidMove(
            board[history[0]],
            board[history[history.length - 1]]
          ),
        /* check if the tour was closed - initial square can be reached from the final square */
        closedTour: gameStatistics.closedTour
          ? true
          : checkIfValidMove(
            board[history[0]],
            board[history[history.length - 1]]
          ),
        /* check if player won 3 games */
        win3: gameStatistics.gamesWon >= 2 ? true : false,
      };
      dispatch({ type: ActionType.UPDATE_STATISTICS, payload: updatedStats })
      localStorage.setItem("stats", JSON.stringify(updatedStats));
    }
    else if (gameStatus === GameStatus.LOST) {
      const updatedStats = {
        ...gameStatistics,
        /* update the count of games lost */
        gamesLost: gameStatistics.gamesLost + 1,
        /* check if player lost 5 games */
        lose5: gameStatistics.gamesLost >= 4 ? true : false,
        /* check if player succeeded the quickest lose */
        quickestLose: gameStatistics.quickestLose ? true : counter === 4,
      };
      dispatch({ type: ActionType.UPDATE_STATISTICS, payload: updatedStats })
      localStorage.setItem("stats", JSON.stringify(updatedStats));
    }
  }, [gameStatus]);
};

export default useUpdateStats;